import { Router } from "express";
import {
  borrarUsuario,
  crearUsuario,
  editarUsuario,
  obtenerUsuario,
} from "../controllers/usuarios.controllers";

const router = Router();

router
  .route("/usuarios")
  // .get()
  .post(crearUsuario);
// .put()
// .delete()

router
  .route("/usuarios/:id")
  .get(obtenerUsuario)
  .put(editarUsuario)
  .delete(borrarUsuario)
  .post();

export default router;
