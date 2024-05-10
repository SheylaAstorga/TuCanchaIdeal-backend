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
