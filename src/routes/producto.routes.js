import { Router } from "express";
import { editarProducto } from "../controllers/productos.controllers";

const router = Router();

router
  .route("/productos/:id")

  .put(editarProducto);

export default router;
