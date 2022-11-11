import { Router } from "express";
import {
  crearProducto,
  editarProducto,
} from "../controllers/produto.controllers";

const router = Router();

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
