export type ProgramRequest = {
  name: string;
  parameters: {
    temperature: number;
    spinSpeed: number;
  };
};

export type WalletTransaction = {
  machineId: string | undefined;
  credits: number;
}
