export function getAvailabeProgram() {
  const temperature = [30, 40, 50];
  const spinSpeed = [800, 1200, 1600];
  const name = "normal";
  const duration = 3600;

  return {temperature, spinSpeed, name, duration};
}

export enum Status {
  operational,
  paused,
  idle,
}

export function setStatus(status: typeof Status) {
  try {
    return 
  } catch (error) {
    
  }
}

export function getStatus() {
    
}
