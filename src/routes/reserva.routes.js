import { Router } from "express";
import { crearReserva } from "../controllers/reserva.controllers.js";


const router = Router()

router.route('/reservas').post(crearReserva)

export default router;