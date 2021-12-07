const { Router} = require('express');
// const router = Router();
const UserController = require('../controllers/userController');

class UserRouter{
    constructor(){
        // Crear objeto de tipo Router y asignarlo como atributo de la clase
        this.router= Router();
        // configurar las rutas
        this.config();
    }
    config(){
const objUserC = new UserController();
//crear y configurar endpoints
this.router.post('/user', objUserC.register);  // ruta para agregar usuario a la DB
//this.router.post('/user', objUserC.decode);
this.router.post('/user/auth', objUserC.login);  // ruta de autenticacion de inicio de sesion de un usuario registrado en la DB
    }
}

module.exports = UserRouter;