import Reserva from "../database/models/reserva.js";
export const crearReserva = async (req, res) => {
    try {
        const reserva = new Reserva(req.body)

        await reserva.save()
        res.status(201).json({ mensaje: 'Reserva Creada Correctamente!' })
    } catch (error) {
        console.log(error)
        res.status(400).json({ mensaje: 'Error al crear la reserva' })
    }
}