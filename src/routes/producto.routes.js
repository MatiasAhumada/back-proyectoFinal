import { Router } from "express";
import { crearProducto, editarProducto } from "../controllers/produto.controllers";

const router = Router();


router.route("/producto")
.get()
.post(crearProducto)


router
  .route("/productos/:id")

  .put(editarProducto);

export default router;
