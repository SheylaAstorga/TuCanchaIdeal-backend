import Establecimiento from "../database/models/Establecimiento.js";


export const listarCanchas =(req,res)=>{
    console.log('desde listar canchas');
    res.send('Enviar lista de canchas...')
}

export const borrarCancha = async(req,res) =>{
    try{
        const buscarCancha = await Establecimiento.findById(req.params.id);
        if(!buscarCancha) {
            return res 
            .status(404)
            .json({
                mensaje: "No se pudo eliminar la cancha, el id es incorrecto",
            });
        }
        await Establecimiento.findByIdAndDelete(req.paarams.id, req.body);
        res.status(200).json({ mensaje: "La cancha fue eliminada exitosamente"});
    }catch(error){
        console.error(error);
        res
        .status(500)
        .json({ mensaje: "Ocurrio un error al intentar borrar la cancha"})
    }
}