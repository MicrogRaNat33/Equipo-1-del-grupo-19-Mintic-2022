const User = require('../models/users');
const jwt = require('jsonwebtoken');


class UserController{
    // creamos metodo que procesa una peticion http para registrar un usuario. El metodo envia un request y recibe una respuesta
    register(req, res){
        let objUser = req.body;   // datos del usuario
        //if(objUser.nombre && objUser.email && objUser.password && objUser.pais && objUser.fecha && objUser.admin && objUser.data_pol){
        //Verificamos los datos obligatorios del usuario    
        if(objUser.nombre && objUser.email && objUser.password && objUser.pais && objUser.data_pol){
            //guardamos datos del usuario en la BD
            User.create(objUser, (error, doc)=>{
                if(error) {
                    res.status(500).json({info:error});
                }else{
                    console.log(doc);
                    let token = jwt.sign({id:doc._id}, process.env.JWT_PRIVATE_KEY);
                     res.status(201).json({token});
                }
            });
        }else{
            res.status(400).json({info:"Datos incompletos"});
        }
    }
// Validacion  del usuario y contrasena 
    login(req, res) {
        let {email, password} = req.body;
        User.findOne({email, password}, (error, doc) =>{
            if(error){
                res.status(500).json({error});
            }else{
                if(doc !=null && doc != undefined){
                let token = jwt.sign({id:doc._id}, process.env.JWT_PRIVATE_KEY);
                res.status(200).json({token});
            }else{
                res.status(401).json({info:'credenciales inavalidas'});
            }
        }
        });
    }
}

module.exports = UserController;