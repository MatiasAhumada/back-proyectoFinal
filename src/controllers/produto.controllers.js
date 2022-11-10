export const crearProducto = async (req, res) => {
  try {
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    res.status(201).json({
      message: "El producto se creo correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al crear el producto",
    });
  }
};
