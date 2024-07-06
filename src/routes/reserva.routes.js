import { Router } from "express";
import { obtenerReserva } from "../controllers/reserva.controllers.js";

const router = Router()

router.route('/reserva').post(crearReserva);
router.route('/reserva/:id').get(obtenerReserva);
export default router;