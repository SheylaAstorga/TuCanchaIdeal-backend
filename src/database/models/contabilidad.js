import mongoose from "mongoose";

const contabilidadSchema = new mongoose.Schema({
    ganancias: {
        type: Number,
        required: true,
    },
    canchaSeñada: {
        type: Number,
        required: true,
    },
    canchaReservada: {
        type: Number,
        required: true,
    },
    fechaCierre: {
        type: Date,
        default: Date.now,
    },
})

const contabilidad = mongoose.model('contabilidad', contabilidadSchema)
export default contabilidad