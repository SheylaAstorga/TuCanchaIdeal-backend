import { Router } from "express";
import { borrarCancha, listarCanchas } from "../controllers/canchas.controllers.js";

const router = Router();

router.route('/canchas').get(listarCanchas).delete(borrarCancha)

export default router;