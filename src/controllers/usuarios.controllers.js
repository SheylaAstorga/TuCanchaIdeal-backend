import Usuario from "../database/models/usuario.js";

export const listarUsuarios = (req, res) => {
  console.log("Desde listar usuarios");
  res.send("Enviar lista de usuarios");
};

export const eliminarUsuarios = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ mensaje: "Este Usuario no existe" });
    }

    await Usuario.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Usuario Eliminado Corrrectamente!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Error al Eliminar un Usuario" });
  }
};
