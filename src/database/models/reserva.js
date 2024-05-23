import mongoose, { Schema } from "mongoose";

const reservaSchema = new Schema({
  canchas: {
    type: Number,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  turno: {
    type: Date,
    required: true,
  },
  telefono:{
    type: Number,
    minLength: 10,
    maxLength: 16,
  }
});

const Reserva = mongoose.model("reserva", reservaSchema)

export default Reserva;