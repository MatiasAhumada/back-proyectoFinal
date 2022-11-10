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