import mongoose, { Schema } from "mongoose";
const pedidoSchema = new Schema({
  nombrePedido: {
    type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 10,
    maxLength: 50,
  },

  precio: {
    type: Number,
    required: true,
    minLength: 1,
    maxLength: 10000,
  },
  detalle: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 5000,
  },
  categoria: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
    value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
  },
});

const Pedido = mongoose.model("pedido", pedidoSchema);

export default Pedido;