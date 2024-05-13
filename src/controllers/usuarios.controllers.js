import Usuario from "../database/models/usuario.js"


export const listarUsuarios =(req,res)=>{
    console.log('Desde listar usuarios');
    res.send('Enviar lista de usuarios')
}

