import mongoose, { Schema } from "mongoose";
import Cancha from "./Cancha.js";

const reservaSchema = new Schema({
  canchas: [
    {
      cancha: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Cancha,
        required: true,
      },
    },
  ],
  fecha: {
    type: Date,
    required: true,
},
});
