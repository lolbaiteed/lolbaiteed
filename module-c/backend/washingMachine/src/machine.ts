import express, {Response, Request} from 'express'
import { getAvailabeProgram, getCurrentProgram, getStatus, pauseProgram, resumeProgram, setPorgram, stopProgram } from './utils';
import { ProgramRequest } from 'types';
import { checkOwner, setOwner } from 'middleware';


const app = express();
app.use(express.json());

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

app.post("/control/start", setOwner ,async (req: Request, res: Response) => {
  const data = req.body as ProgramRequest;
  const token = (req as any).token; 
  try {  
    let program = await setPorgram(data.parameters.temperature, data.parameters.spinSpeed, token);
    res.status(200).json({
      message: "Machine started succesfully",
      machineId: process.env.MACHINE_ID,
      porgramName: data.name, 
      parameters: {
        temperature: program?.temperature,
        spinSpeed: program?.spinSpeed,
        duration: program?.duration
      },
      creditsDeducted: program?.creditsDeducted,
      remainingCredits: program?.remainingCredits
    })
  } catch (error) {
    if(error instanceof Error) {
      res.status(500).json({
        name: error.name,
        message: error.message,
        stackTrace: error.stack
      }) 
    } else if (error instanceof TypeError) {
      res.status(400).json({
        name: error.name,
        message: error.message
      }) 
    } else if (error instanceof WebTransportError) {
      res.status(404).json({
        name: error.name,
        message: error.message
      })
    }
  }
})

app.post("/control/stop", checkOwner, async (_req: Request, res: Response) => {
  try {
    stopProgram();
    res.status(200).json({
      message: "Mahcine stopped succesfully"
    })
  } catch (error) {
    if(error instanceof Error) {
      res.status(400).json({
        message: error.message
      })
    }
  }
})

app.post("/control/pause", async (_req: Request, res: Response) => {
  try {
    pauseProgram()
    res.status(200).json({
      message: "Program paused succesfully"
    })
  } catch (error) {
    if(error instanceof Error) {
      res.status(400).json({
        message: error.message
      })
    }
  }
})

app.post("/control/resume", async (_req: Request, res: Response) => {
  try {
    resumeProgram()
    res.status(200).json({
      message: "Program resumed succesfully"
    })
  } catch (error) {
    if(error instanceof Error) {
      res.status(400).json({
        message: error.message
      })
    }
  }
})

app.listen(4000, () => {
  console.log(`Machine ${process.env.MACHINE_NAME} ready on port 4000 (internal network)`)
});
