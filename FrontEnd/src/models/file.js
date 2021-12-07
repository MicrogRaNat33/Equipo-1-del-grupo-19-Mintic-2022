const {Schema, model} = require('mongoose');

const fileSchema = Schema({
    titulo:{type:String, required:[true,'titulo del recurso es obligatorio']},
    autor:{type:String, required:[true,'Autor del recurso es obligatorio']},
    categoria:{type:String, required:[true,'La categoria es obligatorio']},
    //cat_id:{type:String, required:[true,'id de la categoria es obligatorio']},
    user_id:{type:String, required:[true,'id del usuario es obligatorio']},
    path:{type:String, required:[true,'El path del archivo es obligatorio']},
    fecha:{type: Date, default: Date.now},
},
    {
        collection:"files"
});

module.exports = model('File', fileSchema);