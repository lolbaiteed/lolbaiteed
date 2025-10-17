import { ActionResponse, WalletTransaction } from "types";

let remainingTime = 0;
let startTime = 0;
let totalDuration = 0;
let timeBuffer = 0;
let baseProgram: any;

export function getAvailabeProgram() {
  const temperature = [30, 40, 50];
  const spinSpeed = [800, 1200, 1600];
  const name = "normal";
  const duration = 3600;
  const startDate: string = ""; 
  return { startDate, temperature, spinSpeed, name, duration };
}

type Program = ReturnType<typeof getAvailabeProgram>

export enum Status {
  Operational = "operational",
  Paused = "paused",
  Idle = "idle",
}

let currentStatus: Status = Status.Idle;
let currentProgram: Program | null = null;
let currnetTimeout: NodeJS.Timeout | null = null;

function canTransition(from: Status, to: Status): boolean {
  switch (from) {
    case Status.Idle:
      return to === Status.Operational;

    case Status.Operational:
      return to === Status.Paused || to === Status.Idle;

    case Status.Paused:
      return to === Status.Operational || to === Status.Idle;

    default:
      return false;
  }
}

export function setStatus(newStatus: Status): void {
  if (canTransition(currentStatus, newStatus)) {
    console.log(`Status changed from ${currentStatus} to ${newStatus}`);
    currentStatus = newStatus;
  } else {
    throw new Error(`Invalid transition: ${currentStatus} -> ${newStatus}`);
  }
}

export function getStatus(): Status {
  return currentStatus;
}

export function getCurrentProgram(): Program | null {
  return currentProgram;
}

function isBusy(): boolean {
  if (currentProgram != null) {
    return true;
  }
  return false;
}

export function clcCost(duration: number) {
  let cost = (duration / 3600) * 10 + 5;
  return cost;
}

async function WalletTransaction(token: any, programParams: Program ) {
    const data: WalletTransaction = {
      machineUsageId: process.env.MACHINE_ID,
      programParams,
      amount: clcCost(3600)
    }
    const url = "http://api:3000/api/v1/users/me/credits"
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        "Request-Toolchain": "MachineUsage"
      },
      body: JSON.stringify(data)
    })

    const result = await resp.json();

    if (!resp.ok) throw new TypeError(`status: ${resp.status}`)

    return result;
}

export function timeout(duration: number | undefined, action?: "resume" | "remainTime" | "start"): any {
  const state = {
    inProgress: false,
    done: false
  };

  if (currentProgram != null) state.inProgress = true;

  if(action === "remainTime" && duration === undefined) {
    const now = Date.now()
    const elapsed = now - startTime
    remainingTime = Math.max(totalDuration - elapsed, 0)
    return remainingTime
  } else if (duration === undefined && action === "resume") {
    if (getStatus() === Status.Paused && remainingTime > 0) {
      setStatus(Status.Operational);
      startTime = Date.now();

      currnetTimeout = setTimeout(() => {
        setStatus(Status.Idle);
        currnetTimeout = null;
        currentProgram = null;
        remainingTime = 0;
        state.done = true;
        state.inProgress = false;
      }, remainingTime)
    }
  } else if (duration != undefined && !action){
    if (getStatus() === Status.Operational) {
      if (currnetTimeout) clearTimeout(currnetTimeout);
      totalDuration = duration * 1000;
      startTime = Date.now();
      remainingTime = totalDuration;
      timeBuffer = 0;

      currnetTimeout = setTimeout(() => {
        setStatus(Status.Idle);
        currentProgram = null;
        currnetTimeout = null;
        remainingTime = 0;
        state.done = true;
        state.inProgress = false;
      }, totalDuration)
    }
  }

  return state;
}

function convertDate(timestamp: number) {
  const date = new Date(timestamp);
  const converted = date.toISOString()
  return { converted, timestamp }
}

export async function setPorgram(temperature: number, spinSpeed: number, token: any): Promise<any> {
  const available = getAvailabeProgram();

  const tempCopy = [...available.temperature];
  const spinCopy = [...available.spinSpeed];

  if (!tempCopy.includes(temperature)) {
    throw new TypeError(`Temperature ${temperature} is not supported`);
  }

  if (!spinCopy.includes(spinSpeed)) {
    throw new TypeError(`Spin speed ${spinSpeed} is not supported`);
  }

  if (isBusy()) {
    throw new Error("Machine is busy, wait to previous program end");
  }

  setStatus(Status.Operational);

  let delay = timeout(available.duration, undefined)

  const startDate = convertDate(startTime);

  const clcRemainingTime = Number(timeout(undefined, "remainTime")) 

  const newProgramBuilder: Promise<Program> = new Promise(async (resolve, reject) => {
    try {
      const program = {
        ...available,
        temperature: [temperature],
        spinSpeed: [spinSpeed],
        startDate: startDate.converted,
      };
      resolve(program)
    } catch (error) {
      reject(error)
    }
  })

  baseProgram = await newProgramBuilder;

  let walletStatus = await WalletTransaction(token, baseProgram) 

  if (!walletStatus) throw new TypeError
  
  let creditsDeducted = walletStatus.creditsBefore - walletStatus.creditsAfter;

  interface ExtendedProgram extends Program {
    remainingCredits: any,
    creditsDeducted: number
    programRemainingTime: number
  }

  const fullNewProgram: ExtendedProgram = {
    ...baseProgram,
    remainingCredits: walletStatus.creditsAfter,
    creditsDeducted: creditsDeducted,
    programRemainingTime: clcRemainingTime
  }

  currentProgram = fullNewProgram;

  if (delay.inProgress === true && delay.done === false) throw new Error

  console.log(`Program set: ${available.name}`);

  return currentProgram;
}

export function stopProgram(): void {
  try {
  if (currnetTimeout) {
    clearTimeout(currnetTimeout);
    currnetTimeout = null;
  }
  currentProgram = null;
  setStatus(Status.Idle);
  } catch (error) {
    if(error instanceof Error) {
      console.log(error.message, error.name)
    }
  }
}

export function pauseProgram(): unknown{
  if (getStatus() === Status.Operational) {
    if (currnetTimeout) {
      clearTimeout(currnetTimeout)
      currnetTimeout = null

      const elapsed = Date.now() - startTime
      remainingTime = Math.max(totalDuration - elapsed, 0)
      setStatus(Status.Paused)
      return currentProgram 
    }
  } else throw new Error("Operation not allowed in current state")
}

export function resumeProgram(): void {
  if (getStatus() === Status.Paused) {
    timeout(undefined, "resume");
  } else throw new Error("Operation not allowed in current state")
}
