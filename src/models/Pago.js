import mongoose from "mongoose";

const pagoSchema = new mongoose.Schema({
    tipo: {
        type: String,
        enum: ['mercadoPago'],
        required: true
    },
    estado: {
        type: String,
        enum: ['pendiente', 'aprobado', 'rechazado'],
        default: 'pendiente'
    },
    monto: {
        type: Number,
        required: true,
    },
    fecha: {
        type: Date,
        default: Date.now()
    },
    referencia: {
        type: String,
        required: true
    }
    // Aquí se podrian agregar los campos que solicite Mercado Pago cuando realicemos la implementación.
});

const Pago = mongoose.model("Pago", pagoSchema);
export default Pago;
