const { response, request } = require('express')

const usuariosPost = (req , res = response) => {

    const {nombre, edad} = req.body;



    res.json({
        ok: true,
        msg: 'get  API - controlador',
        nombre, edad
    });
}
const usuariosGet = ( req, res = response ) => {

    let query = req.query

    res.json({
        ok: true,
        msg: 'get API',
        query
    });
  }

  const usuariosPut = ( req, res = response ) => {
 
    const { id }  = req.params
    
    
    res.status(201).json({
        ok: true,
        msg: 'get API'
    });
  }



module.exports = {
    usuariosGet,
    usuariosPost ,
    usuariosPut
}
