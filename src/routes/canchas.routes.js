import { Router } from "express";
import { listarCanchas } from "../controllers/canchas.controllers.js";
import { obtenerContabilidad } from "../controllers/contabilidad.controllers.js";

const router = Router();

router.route("/canchas").get(listarCanchas);
router.route("/contabilidad").get(obtenerContabilidad);

export default router;
