import Reserva from '../database/models/reserva.js'


export const obtenerReserva = async (req, res) => {
    try {
      const reserva = await Reserva.findById(req.params.id);
      res.status(200).json(reserva);
    } catch (error) {
      console.log(error);
      res.status(404).json({ mensaje: "La reserva no fue encontrada" });
    }
  };






export const crearReserva = async (req, res) => {
    try {
        const usuario = new Reserva(req.body)

        await usuario.save()
        res.status(201).json({ mensaje: 'Reserva Creada Correctamente!' })
    } catch (error) {
        console.log(error)
        res.status(400).json({ mensaje: 'Error al crear el usuario' })
    }
}