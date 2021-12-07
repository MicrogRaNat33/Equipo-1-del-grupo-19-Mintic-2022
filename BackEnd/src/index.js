const express = require('express');
const cors = require('cors');
//Configurar variables de entorno
require('dotenv').config();
//Importar módulos
const ConnDb = require('./database/connDb');
const FileRouter = require('./routers/fileRouter');
const UserRouter = require('./routers/userRouter');
const CatRouter = require('./routers/catRouter');

class Server{
    // metodo constructor
    constructor(){  
       this.objConn = new ConnDb(); // creamos el objeto de conexion a la DB
        //Crear aplicación express
        this.app = express();  // creamos un servidor express
        this.config();    // Llamamos al metodo de configuracion
    }    
    config(){
    //indicar el procesamiento de datos en formato json durante las peticiones.
        this.app.use(express.json());
        //Permitir las conexiones de origen cruzado
      this.app.use(cors());
        // Almacenamos el puerto por el que correrà el servidor
        this.app.set('PORT', process.env.PORT || 3000);
        //----------------Crear rutas-----------------
        const router = express.Router();
        //Procesar solicitudes con el mètodo GET (metodo por defecto del navegador) a la raíz del servidor
        router.get('/', (req, res)=>{
            res.status(200).send();
        });
        const userR = new UserRouter();
        const catR = new CatRouter();
        const fileR = new FileRouter();
        

        //--------------Añadir rutas a express--------------
        this.app.use(router);
        this.app.use(userR.router);
        this.app.use(catR.router);
        this.app.use(fileR.router);
        

        //Poner el servidor a la escucha
        this.app.listen(this.app.get('PORT'), ()=>{
            console.log("Servidor corriendo por el puerto ==>> ", this.app.get('PORT'));
        });
    }

}

new Server();
