import { Router } from "express";
import { check } from "express-validator";
import { crearProducto, editarProducto, listarProductos, borrarProducto } from "../controllers/produto.controllers";

const router = Router();

router.route("/producto")
.get(listarProductos)
.post(crearProducto)

router
  .route("/productos")
  // .get()
  .post([
    check("categoria")
    .isIn(["picante epiko", "medio picante", "comida caliente", "comida fria"])
  ],
    crearProducto);
// .put()
// .delete()
router
.route("/productos/:id")
  // .get()
  .put(editarProducto)
  .delete(borrarProducto)

export default router;
