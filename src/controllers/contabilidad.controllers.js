import contabilidad from '../database/models/contabilidad.js';

const obtenerContabilidad = async (req, res) => {
    try {
      const contabilidades = await contabilidad.find();
      res.status(200).json({mensaje:"se ha encontrado la lista de contabilidad"});
    } catch (error) {
      console.log(error);
      res
        .status(404)
        .json({ mensaje: "No se pudo encontrar la lista de contabilidad" });
    }
  };

  export {obtenerContabilidad}