export type ProgramRequest = {
  name: string;
  parameters: {
    temperature: number;
    spinSpeed: number;
  };
};
