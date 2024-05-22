// Aquí se importaría el modelo de las reservas

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