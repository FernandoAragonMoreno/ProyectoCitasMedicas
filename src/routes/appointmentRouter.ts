import express from "express";
/*
import {
  getAppointments,
  createAppointment,
} from "../controllers/appointmentController";
*/

export const doctorRouter = express.Router();
export const patientRouter = express.Router();
export const appointmentRouter = express.Router();

// Definir rutas para cada recurso (doctores, pacientes, citas)
