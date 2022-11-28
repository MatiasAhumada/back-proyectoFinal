import { validationResult } from "express-validator";
import Pedidos from "../models/pedidos";


export const listarPedidos = async(req, res)=>{
  try {
    const listaPedidos = await Pedidos.find();
    res.status(200).json(listaPedidos)
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al intentar buscar los pedidos"
    })
  }
}

export const crearPedido = async (req, res) => {
  try {
    const errores = validationResult(req);
    if(!errores.isEmpty()){
      return res.status(400).json({
        errores: errores.array()
      })
    }
    const pedidoNuevo = new Pedidos(req.body);
    await pedidoNuevo.save();
    res.status(201).json({
      message: "El pedido se creo correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al crear el pedido",
    });
  }
};

export const editarPedido = async (req, res) => {
    try {
      await Pedidos.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        mensaje: "El pedido fue editado correctamente",
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "Error el prudcto solicitado no pudo ser modificado",
      });
    }
  };

  export const borrarPedido = async (req, res) =>{
    try {
    await Pedidos.findByIdAndDelete(req.params.id)
    res.status(200).json({
        mensaje: 'El pedido fue correctamente eliminado'
    });
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: 'Error. El pedido solicitado no pudo ser eliminado.'
        });
    }
};


export const obtenerPedido = async(req, res)=>{
  
  try {
    console.log(req.params)
    const pedidoBuscado = await Pedidos.findById(req.params.id);
    res.status(200).json(pedidoBuscado);

  } catch (error) {
    res.status(404).json({
      mensaje:'Error no encontramos el pedido solicitado'
    })
  }

}