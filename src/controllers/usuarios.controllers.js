import Usuario from "../models/usuario";

export const crearUsuario = async(req, res) =>{
    try {
        const usuarioNuevo = new Usuario(req.body);
        await usuarioNuevo.save();
        res.status(201).json({
            message: "El usuario fue creado correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(401).json({
            message:"Error al crear un usuario"
        })
    }
}
export const obtenerUsuario= async (req, res) => {
    try {
     
      const usuarioBuscado = await Producto.findById(req.params.id);
      res.status(200).json(usuarioBuscado);
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "Error no se pudo encontrar el usuario solicitado",
      });
    }
  };
export const editarUsuario = async (req, res) => {
    try {
      await Producto.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        mensaje: "El usuario fue editado correctamente",
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "Error el usuario solicitado no pudo ser modificado",
      });
    }
  };

export const borrarUsuario = async (req, res) => {
    try {
      await Producto.findByIdAndDelete(req.params.id);
      res.status(200).json({
        mensaje: "El usuario fue  correctamente eliminado",
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "Error el usuario solicitado no pudo ser eliminado",
      });
    }
  };
  