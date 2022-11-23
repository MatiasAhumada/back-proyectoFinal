import { Router } from "express";
import { crearProducto, editarProducto, listarProductos, borrarProducto } from "../controllers/produto.controllers";

const router = Router();

router.route("/producto")
.get(listarProductos)
.post(crearProducto)

router
  .route("/productos")
  // .get()
  .post(crearProducto);
// .put()
// .delete()
router
.route("/productos/:id")
  // .get()
  .put(editarProducto)
  .delete(borrarProducto)

export default router;
