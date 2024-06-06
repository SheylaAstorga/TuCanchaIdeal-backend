import Establecimiento from "../database/models/Establecimiento.js";

export const listarEstablecimientos = async (req,res)=>{
    try {
        const establecimientos = await Establecimiento.find()
        res.status(200).json(establecimientos)
    } catch (error) {
        console.log("🚀 ~ obtenerEstabrlecimiento ~ error:", error)
        res.status(404).json({ mensaje: "Error al obtener establecimiento"})
    }

}