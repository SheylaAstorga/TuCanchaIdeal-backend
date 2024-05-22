import Usuario from "../database/models/usuario.js"

export const editarUsuario = async( req, res )=>{
try {
    const busquedaResultado = await Usuario.findById(req.params.id)
    if(!busquedaResultado){
        return res.status(404).json({mensaje: "No se pudo editar el usuario, el id es incorrecto"})
    }
    await Usuario.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({mensaje: "El usuario fue modificado exitosamente."})
} catch (error) {
    console.log("🚀 ~ editarUsuario ~ error:", error)
    res.status(500).json({mensaje: "Ocurrio un error al intentar editar "})
}
}

export const listarUsuarios =(req,res)=>{
    console.log('Desde listar usuarios');
    res.send('Enviar lista de usuarios')
}

