const express = require("express");
const cors = require('cors')


class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';
  
    //Middlewares 
    this.middlewares()
   


    //Rutas de mi aplicación
    this.routes();
  }


  routes() {
      this.app.use( this.usuariosPath, require('../routes/usuarios'))
      }

  middlewares(){
  
    //CORS
    this.app.use( cors() )

    //Lectura y parseo del body
    this.app.use( express.json() );

    //Directorio public/index.html
    this.app.use( express.static('public'))
}


  listen(){
    this.app.listen( this.port,  () => {
        console.log(`Escuchando en el puerto ${this.port}`)
    })
  }
}

module.exports = Server;