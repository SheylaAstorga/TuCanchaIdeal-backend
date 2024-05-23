

export const listarCanchas = (req, res) => {
  console.log("desde listar canchas");
  res.send("Enviar lista de canchas...");
};

export const obtenerCancha = async (req, res) => {
  try {
    const cancha = await Cancha.findById(req.params.id);
    res.status(200).json(cancha);
  } catch (error) {
    console.log(error);
    res.status(404).json({ mensaje: "Cancha No Encontrada" });
  }
};

export const actualizarCancha = async (req, res) => {
  try {
    const cancha = await Cancha.findById(req.params.id);
    if (!cancha) {
      res.status(404).json({ mensaje: "La Cancha no Existe" });
    }

    await Cancha.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "La Cancha fue modificada exitosamente!" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ mensaje: "Error al actualizar los datos de la cancha" });
  }
};
