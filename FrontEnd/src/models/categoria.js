const {Schema, model} = require('mongoose');

const catSchema = Schema({
    nombre:{type:String, required:[true,'El nombre de la categoria es obligatorio']},
    color:{type:String, required:[true,'El codigo del color es obligatorio']},
    page:{type:String, required:[true,'la pagina destino es obligatorio']},
    subcat:{type:String},
},
    {
        collection:"categorias"
});

module.exports = model('Cat', catSchema);