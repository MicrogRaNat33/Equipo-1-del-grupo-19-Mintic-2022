const File = require('../models/file');
const jwt = require('jsonwebtoken');
const TokenController = require('./tokenController');

class FileController{

    constructor(){
        this.tokenC = new TokenController;
    }
    
	// Metodo para insertar archivos en DB
	
    create = (req, res)=>{

    // creamos objeto con los datos del archivo
        //let objFile = req.body;
        
         //capturar datos del cuerpo de la petición
       let {titulo, autor, categoria,user_id, path} = req.body;
       //let {titulo, autor, categoria, path} = req.body;

        // obtener datos del token
       let token = this.tokenC.getToken(req);
    // decodificar el token
       let decode = jwt.decode(token, process.env.JWT_PRIVATE_TOKEN);
        
            //guardar archivo en la BD
           // File.create(objFile,(error, doc)=>{
         File.create({titulo, autor, categoria, user_id:decode.id, path}, (error, doc)=>{
           //File.create({titulo, autor, categoria, user_id, path}, (error, doc)=>{
                if(error) {
                    res.status(500).json({info:error});
                }else{
                    res.status(201).json({info:"Archivo insertado a la base de datos"});
                }
            });
    }

//Metodo para listar todos los archivos

get = (req, res) => {
    File.find((error, docs) =>{
        if(error){
            res.status(500).json({error});
        }else{
            res.status(200).json(docs);
        }
    });
}

// Metodo para listar archivos por autor

getByAutor = (req, res) => {
    // capturar autor del archivo
    let {autor} = req.body;

    File.find({autor}, (error, docs) => {
        if(error) {
            res.status(500).json({error});
        }else{
            res.status(200).json({docs});
        }
    });

}

// Metodo para listar archivos por titulo

getByTitulo = (req, res) => {
    // capturar autor del archivo
    let {titulo} = req.body;

    File.find({titulo}, (error, docs) => {
        if(error) {
            res.status(500).json({error});
        }else{
            res.status(200).json({docs});
        }
    });

}

// Metodo para listar archivos por categoria

getByCat = (req, res) => {
    // Obtener categoria del archivo de la base datos
    let {categoria} = req.body;

    File.find({categoria}, (error, docs) => {
        if(error) {
            res.status(500).json({error});
        }else{
            res.status(200).json({docs});
        }
    });
}

// Método para obtener archivos insertados por un usuario registrado
    getByUser = (req, res)=>{
        //Obtener id del usuario a partir del token
        let token = this.tokenC.getToken(req);
        let decode = jwt.decode(token);
        let user_id = decode.id;
        console.log(user_id);
        //Obtener productos del usuario de la BD
        File.find({user_id}, (error, docs)=>{
            if(error){
                res.status(500).json({error});
            }else{
                res.status(200).json(docs);
            }
        });
    }

// Metodo para actualizar registro de un archivo

update = (req, res) => {
    // capturar id del archivo
    let {id, titulo, autor, categoria, path} = req.body;

    // obtener el token del usuario
    let token = this.tokenC.getToken(req);
    // decodificar el token
    let decode = jwt.decode(token, process.env.JWT_PRIVATE_TOKEN);
    let user_id=decode.id;

    // Buscar por id del archivo y por id de usuario para actualizar los datos del registro (Doc) en la DB

    File.findOneAndUpdate({_id:id, user_id}, {titulo, autor, categoria, path}, (error, doc) => {
        if(error) {
            res.status(500).json({error});
        }else{
            res.status(200).json({info:'Archivo actualizado'});
        }
    });
}

// Metodo para borrar archivo

delete = (req, res) => {
    // Obtener id del archivo a eliminar
    let {id} = req.body;

    // obtener el token
    let token = this.tokenC.getToken(req);

    // decodificar el token
    let decode = jwt.decode(token, process.env.JWT_PRIVATE_TOKEN);
    let user_id=decode.id;
// Eliminar registro de la DB
    File.findOneAndRemove({_id:id, user_id}, (error, doc) => {
        if(error) {
            res.status(500).json({error});
        }else{
            res.status(200).json({info:'Archivo eliminado'});
        }
    });
}
}

module.exports = FileController;