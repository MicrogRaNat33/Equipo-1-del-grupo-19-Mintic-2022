const Cat = require('../models/categoria');

class CatController{

    //Metodo para guardar categoria en la BD
    create(req, res){
        let objCat = req.body;
        if(objCat.nombre && objCat.color && objCat.page ){
            //Insertar categoria en la BD
            Cat.create(objCat, (error, doc)=>{
                if(error) {
                    res.status(500).json({info:error});
                }else{
                    res.status(201).json({info:"categoria guardad en la base de datos"});
                }
            });
        }else{
            res.status(400).json({info:"No se pudo insertar la categoria"});
        }
    }

//Metodo para listar todos las categorias

get = (req, res) => {
    Cat.find((error, docs) =>{
        if(error){
            res.status(500).json({error});
        }else{
            res.status(200).json(docs);
        }
    });
}

//Metodo para buscar categoria por nombre

getByName = (req, res) => {
    // capturar nombre de la categoria
    let {nombre} = req.body;

    Cat.find({nombre}, (error, docs) => {
        if(error) {
            res.status(500).json({error});
        }else{
            res.status(200).json({docs});
        }
    });

}


}

module.exports = CatController;