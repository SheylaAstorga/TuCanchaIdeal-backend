import mongoose, { Schema } from 'mongoose';

const usuarioSchema = new Schema({
  nombreCompleto: {
    type: String,
    required: true,
    unique: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  estado: {
    type: String,
    required: true,
    enum:['Activo','Suspendido']
  },
  rol: {
    type: String,
    required: true,
    enum: ['Administrador', 'Usuario', 'Dueño']
  }
});

const Usuario = mongoose.model('usuario', usuarioSchema);

export default Usuario;