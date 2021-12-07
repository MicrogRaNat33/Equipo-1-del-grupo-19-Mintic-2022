const {Router} = require('express');
const CatController = require('../controllers/catController');

class CatRouter{
    constructor(){
        // Crear objeto de tipo Router y asignarlo como atributo de la clase
        this.router= Router();
        // configurar las rutas
        this.config();
    }
    config(){
const objCatC = new CatController();

this.router.post('/cat', objCatC.create);
this.router.get('/cat', objCatC.get);
this.router.get('/cat/nombre', objCatC.getByName);
    }
}

module.exports = CatRouter;