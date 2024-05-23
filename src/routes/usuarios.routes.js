import { Router } from "express";
import { eliminarUsuarios, listarUsuarios } from "../controllers/usuarios.controllers.js";


const router = Router();

router.route('/usuarios').get(listarUsuarios)
router.route('/usuarios/:id').delete(eliminarUsuarios)

export default router;