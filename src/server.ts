import express from "express";
import bodyParser from "body-parser";
import { doctorRouter } from "./routes/doctorRouter";
import { patientRouter } from "./routes/doctorRouter";
import { appointmentRouter } from "./routes/doctorRouter";
//import { doctorRouter, patientRouter, appointmentRouter } from './routes';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Rutas
app.use("/doctors", doctorRouter);
app.use("/patients", patientRouter);
app.use("/appointments", appointmentRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
