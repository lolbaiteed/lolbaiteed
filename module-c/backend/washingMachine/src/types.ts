export type ProgramRequest = {
  name: string;
  parameters: {
    temperature: number;
    spinSpeed: number;
  };
};

export type WalletTransaction = {
  machineUsageId: string | undefined;
  amount: number;
}
