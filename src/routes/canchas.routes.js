import { Router } from "express";
import { obtenerContabilidad } from "../controllers/contabilidad.controllers.js";

import {
  actualizarCancha,
  listarCanchas,
  obtenerCancha,
} from "../controllers/canchas.controllers.js";

const router = Router();

router.route("/canchas").get(listarCanchas);
router.route("/canchas/:id").get(obtenerCancha).put(actualizarCancha);
router.route("/contabilidad").get(obtenerContabilidad);

export default router;
