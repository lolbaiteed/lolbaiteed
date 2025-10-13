import { WalletTransaction } from "types";

export function getAvailabeProgram() {
  const temperature = [30, 40, 50];
  const spinSpeed = [800, 1200, 1600];
  const name = "normal";
  const duration = 3600;

  return { temperature, spinSpeed, name, duration };
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
let remainingTime = 0;
let startTime = 0;
let totalDuration = 0;

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

async function walletTransaction(token: any) {
  const data: WalletTransaction = {
    machineUsageId: process.env.MACHINE_ID,
    amount: clcCost(3600)
  }
  const url = "http://api:3000/api/v1/users/me/credits"
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })

  const result = await resp.json();

  if (!resp.ok) throw new WebTransportError(`status: ${resp.status}`)

  return result;
}

function timeout(duration?: number): any {
  const state = {
    inProgress: false,
    done: false
  };

  if (currentProgram != null) state.inProgress = true;

  if (!duration) {
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
  } else {
    if (getStatus() === Status.Operational) {
      if (currnetTimeout) clearTimeout(currnetTimeout);
      totalDuration = duration * 1000;
      startTime = Date.now();
      remainingTime = totalDuration;

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

  let walletStatus = await walletTransaction(token)

  let creditsDeducted = walletStatus.creditsBefore - walletStatus.creditsAfter;

  const newProgram = {
    ...available,
    temperature: [temperature],
    spinSpeed: [spinSpeed],
    remainingCredits: walletStatus.creditsAfter,
    creditsDeducted: creditsDeducted
  }

  setStatus(Status.Operational);

  let delay = timeout(newProgram.duration)

  currentProgram = newProgram;

  if (delay.inProgress === true && delay.done === false) throw new Error

  console.log(`Program set: ${available.name}`);

  return currentProgram;
}

export function stopProgram(): void {
  if (getStatus() != Status.Operational || getStatus() != Status.Paused) throw new Error("Operation not allowed in current state")

  if (currnetTimeout) {
    clearTimeout(currnetTimeout);
    currnetTimeout = null;
  }
  currentProgram = null;
  setStatus(Status.Idle);
}

export function pauseProgram(): void {

  if (getStatus() === Status.Operational) {
    if (currnetTimeout) {
      clearTimeout(currnetTimeout);
      currnetTimeout = null;

      const elapsed = Date.now() - startTime;
      remainingTime = Math.max(totalDuration - elapsed, 0);
      setStatus(Status.Paused)
    }
  } else throw new Error("Operation not allowed in current state")
}

export function resumeProgram(): void {
  if (getStatus() === Status.Paused) {
    timeout();
  } else throw new Error("Operation not allowed in current state")
}
