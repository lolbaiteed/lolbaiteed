import express, {Response} from 'express'

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
  console.log(`Machine ${process.env.MACHINE_NAME} ready on port 4000`)
});

app.get("/getInfo", (_req, res: Response) => {
  try {
    res.status(200).json({
      name: process.env.MACHINE_NAME, 
      type: process.env.MACHINE_TYPE,
      brand: process.env.MACHINE_BRAND,
      model: process.env.MACHINE_MODEL,
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
