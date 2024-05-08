const { Schema } = require("mongoose");


const reservaSchema = new Schema({
    nombreCompleto: {
        type: String,
        required: true,
        unique: false,
        minLength: 3,
        maxLength: 30
      },
    telefono:{
        type: Number,
        required: true,
        min: 10, 
        max: 16
    },
    email: {
        type: String,
        required: true,
        unique: true
      }

})