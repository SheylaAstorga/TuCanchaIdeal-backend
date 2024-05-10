import { Router } from "express";
import { listarCanchas, obtenerCancha } from "../controllers/canchas.controllers.js";

const router = Router();

router.route('/canchas').get(listarCanchas)
router.route('/canchas/:id').get(obtenerCancha)

export default router;