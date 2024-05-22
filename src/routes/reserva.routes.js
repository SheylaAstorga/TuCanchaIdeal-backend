import { Router } from "express";

const router = Router()

router.route('/reserva').post(crearReserva)

export default router;