const {Router} = require('express');
const FileController = require('../controllers/fileController');
const TokenController = require('../controllers/tokenController');

class FileRouter{
    constructor(){
        // Crear objeto de tipo Router y asignarlo como atributo de la clase
        this.router= Router();
        // configurar las rutas
        this.#config();
    }

    // # -> Crea metodo privado
    #config(){

let tokenC = new TokenController();
        //construir objeto  FileC
const FileC = new FileController();

// Configurar rutas

//rutas publicas
this.router.get('/file', FileC.get);
this.router.get('/file/autor', FileC.getByAutor);
this.router.get('/file/categoria', FileC.getByCat);
this.router.get('/file/titulo', FileC.getByTitulo);

//middleware
this.router.use(tokenC.verifyAuth);

//rutas privadas
this.router.post('/file', FileC.create);
this.router.get('/file/user', FileC.getByUser);
this.router.put('/file', FileC.update);
this.router.delete('/file', FileC.delete);
    }
}

module.exports = FileRouter;