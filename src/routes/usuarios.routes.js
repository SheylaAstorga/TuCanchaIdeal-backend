import { Router } from "express";
import { editarUsuario, listarUsuarios } from "../controllers/usuarios.controllers.js";


const router = Router();

router.route('/usuarios').get(listarUsuarios)
router.route('/usuario/:id').put(editarUsuario) //falta agregar validaciones y validar jwt

export default router;