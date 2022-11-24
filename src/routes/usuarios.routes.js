import { Router } from "express";
import {
  borrarUsuario,
  crearUsuario,
  editarUsuario,
  listarUsuarios,
  obtenerUsuario,
} from "../controllers/usuarios.controllers";
import { check } from "express-validator";

const router = Router();

router.route("/usuarios")
  .get(listarUsuarios)
  .post([
   check("nombre")
   .notEmpty()
   .withMessage("Campo olbigatorio")
   .isLength({min:5, max:50})
   .withMessage("El nombre del usuario debe tener entre 5 y 50 caracteres"), 
   check("email")
   .isEmail
   .notEmpty()
   .withMessage("Campo obligatorio")
   .isLength({min:10, max:50}),
   check("password")
   .notEmpty()
   .withMessage("Campo olbigatorio")
   .matches(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)
  ],crearUsuario);


router.route("/usuarios/:id")
  .get(obtenerUsuario)
  .put([
    check("nombre")
    .notEmpty()
    .withMessage("Campo olbigatorio")
    .isLength({min:5, max:50})
    .withMessage("El nombre del usuario debe tener entre 5 y 50 caracteres"), 
    check("email")
    .isEmail
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min:10, max:50}),
    check("password")
    .notEmpty()
    .withMessage("Campo olbigatorio")
    .matches(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)
   ],editarUsuario)
  .delete(borrarUsuario)


export default router;
