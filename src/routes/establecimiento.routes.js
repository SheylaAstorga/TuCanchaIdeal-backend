import { Router } from "express";
import { listarEstablecimientos } from "../controllers/establecimiento.controllers.js";

const router = Router();

router.route("/establecimientos").get(listarEstablecimientos)

export default router;