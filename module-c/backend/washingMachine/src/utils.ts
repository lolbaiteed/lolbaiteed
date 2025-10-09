export function getAvailabeProgram() {
  const temperature = [30, 40, 50];
  const spinSpeed = [800, 1200, 1600];
  const name = "normal";
  const duration = 3600;

  return {temperature, spinSpeed, name, duration};
}

type Program = ReturnType<typeof getAvailabeProgram>

export enum Status {
  Operational = "operational",
  Paused = "paused",
  Idle = "idle",
}

let currentStatus: Status = Status.Idle;
let currentProgram: Program | null = null;

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

export function assertTransition(from: Status, to: Status): void {
  if (!canTransition(from, to)) {
    throw new Error(`Invalid state transition: ${from} -> ${to}`);
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

export function setPorgram(temperature: number, spinSpeed: number ): void {
  const available = getAvailabeProgram();

  const tempCopy = [...available.temperature];
  const spinCopy = [...available.spinSpeed];

  if(!tempCopy.includes(temperature)) {
    throw new Error(`Temperature ${temperature} is not supported`);
  }

  if(!spinCopy.includes(spinSpeed)) {
    throw new Error(`Spin speed ${spinSpeed} is not supported`);
  }
  
  const newProgram: Program  = {
    ...available,
    temperature: [temperature],
    spinSpeed: [spinSpeed],
  }

  currentProgram = newProgram;

  console.log(`Program set: ${available.name}`);
}
