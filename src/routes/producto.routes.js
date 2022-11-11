import { Router } from "express";
import { crearProducto, editarProducto, listarProductos } from "../controllers/produto.controllers";

const router = Router();


router.route("/producto")
.get(listarProductos)
.post(crearProducto)


router
  .route("/productos/:id")

  .put(editarProducto);

export default router;
