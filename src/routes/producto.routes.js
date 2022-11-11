import { Router } from "express";
import { crearProducto, editarProducto, listarProductos } from "../controllers/produto.controllers";

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
  .put(editarProducto);
// .post()
// .delete()

export default router;
