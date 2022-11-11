import { Router } from "express";
import { crearUsuario } from "../controllers/usuarios.controllers";

const router = Router();

router.route("/usuario")
.get()
.post(crearUsuario)

export default router;
