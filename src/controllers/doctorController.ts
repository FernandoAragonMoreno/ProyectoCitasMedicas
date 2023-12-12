import { Request, Response } from "express";
import { pool } from "../database";

// Obtener todos los doctores
export const getDoctores = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await pool.query("SELECT * FROM doctores");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error al obtener doctores:", error);
    res.status(500).send("Error del servidor");
  }
};
