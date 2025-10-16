export type ProgramRequest = {
  name: string;
  parameters: {
    temperature: number;
    spinSpeed: number;
  };
};

export type WalletTransaction = {
  machineUsageId: string | undefined;
  programParams: any;
  amount: number;
}

export type ActionResponse = {
  machineUsageId: string | undefined;
  programParams: any;
}
