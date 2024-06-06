import mongoose from "mongoose";
import Cancha from "./Cancha.js";
import Usuario from "./usuario.js";


const establecimientoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 100,
    },
    propietario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Usuario,
        required: true,
    },
    estado: {
        type: String,
        enum: ["abierto", "cerrado"],
        default: "cerrado",
    },
    canchas: [
        {
            cancha: {
                type: mongoose.Schema.Types.ObjectId,
                ref: Cancha,
                required: true,
            },
        },
    ],
    lat: {
        type: Number,
        required: true,
    },
    lng: {
        type: Number,
        required: true,
    },
    calle: {
        type: String,
        required: true,
    },
    telefono: {
        type: Number,
        required: true,
    },
    fotos: [{
        foto: {
            type: String,
            required: true,
        }
    }],

})

const Establecimiento = mongoose.model('establecimiento', establecimientoSchema)

export default Establecimiento