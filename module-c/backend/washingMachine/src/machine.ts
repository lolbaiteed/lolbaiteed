import express, {Response, Request} from 'express'
import { getAvailabeProgram, getCurrentProgram, getStatus, setPorgram, setStatus, Status } from './utils';
import { ProgramRequest } from 'types';

const app = express();
app.use(express.json());

app.post("/task", (req, res) => {
  const { jobId, payload } = req.body;
  console.log(`[${process.env.MACHINE_NAME}] Recived job ${jobId}`, payload);

  setTimeout(() => {
    console.log(`[${process.env.MACHINE_NAME}] Finished job ${jobId}`);
  }, 2000);

  res.json({ status: "accepted", machine: process.env.MACHINE_NAME });
})

app.listen(4000, () => {
  console.log(`Machine ${process.env.MACHINE_NAME} ready on port 4000 (internal network)`)
});

app.get("/getInfo", (_req, res: Response) => {
  try {
    const availableProgram = getAvailabeProgram();
    const currentProgram = getCurrentProgram();
    const opStatus = getStatus();
    res.status(200).json({
      name: process.env.MACHINE_NAME, 
      type: process.env.MACHINE_TYPE,
      brand: process.env.MACHINE_BRAND,
      model: process.env.MACHINE_MODEL,
      availablePrograms: [
        {
          name: availableProgram.name,
          temperature: availableProgram.temperature,
          spinSpeed: availableProgram.spinSpeed,
          duration: availableProgram.duration
        }
      ],
      status: {
        operationalStatus: opStatus,
        currentProgram: currentProgram 
      }
    })
  } catch (error) {
    if(error instanceof Error) {
      res.status(500).json({
        message: error.message,
        stackTrace: error.stack
      })
      console.log({error});
    }
  }
})

app.post("/control/start", (req: Request, res: Response) => {
  const data = req.body as ProgramRequest;
  try {  
    setStatus(Status.Operational);
    setPorgram(data.parameters.temperature, data.parameters.spinSpeed);
    const program = getCurrentProgram();
    res.status(200).json({
      message: "Machine started succesfully",
      machineId: process.env.MACHINE_ID,
      porgramName: data.name, 
      parameters: {
        temperature: program?.temperature,
        spinSpeed: program?.spinSpeed,
        duration: program?.duration
      }
    })
  } catch (error) {
    if(error instanceof Error) {
      res.status(400).json({
        name: error.name,
        message: error.message,
        stackTrace: error.stack
      })
    }
  }
})
