import { Router } from "express";
import {
  actualizarCancha,
  listarCanchas,
  obtenerCancha,
} from "../controllers/canchas.controllers.js";

const router = Router();

router.route("/canchas").get(listarCanchas);
router.route("/canchas/:id").get(obtenerCancha).put(actualizarCancha);

export default router;
