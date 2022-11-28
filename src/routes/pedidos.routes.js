import { Router } from "express";
import { check } from "express-validator";
import { crearPedido, editarPedido, listarPedidos, borrarPedido, obtenerPedido } from "../controllers/pedidos.controlles";

const router = Router();


router.route("/pedidos")
  .get(listarPedidos)
  .post(
    [
    check("nombrePedido")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min:2, max:50})
    .withMessage("El nobmre del pedido debe tener entre 2 y 50 caracteres"),
    check("precio")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un número")
    .custom((valor)=>{
      if(valor >=1 && valor <= 10000){
        return true
      }else{
        throw new Error("El precio debe estar entre 1 y 10000")
      }
    }),
     check("categoria")
     .notEmpty()
     .withMessage("Seleccione una categoria")
    .isIn(["picante epiko", "medio picante", "comida caliente", "comida fria"])
    .withMessage("Seleccione una categoria"),
    check("imagen")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
    .withMessage("Ingrese una URL valida")
  ],
    crearPedido);

router.route("/pedidos/:id")
  .get(obtenerPedido)
  .put([
    check("nombrePedido")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min:2, max:50})
    .withMessage("El nobmre del pedido debe tener entre 2 y 50 caracteres"),
    check("precio")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un número")
    .custom((valor)=>{
      if(valor >=1 && valor <= 10000){
        return true
      }else{
        throw new Error("El precio debe estar entre 1 y 10000")
      }
    }),
     check("categoria")
     .notEmpty()
     .withMessage("Seleccione una categoria")
    .isIn(["picante epiko", "medio picante", "comida caliente", "comida fria"])
    .withMessage("Seleccione una categoria"),
    check("imagen")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
    .withMessage("Ingrese una URL valida")
  ],editarPedido)
  .delete(borrarPedido)

export default router;