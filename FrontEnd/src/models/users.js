// El modelo de datos se construye a partir de la clase Schema de Mongoose y la funcion model para exporta el modelo

const {Schema, model} = require('mongoose');
// creamos un nuevo eschema que recibe dos objetos: el modelo de datos y el nombre de la colleccion en MongoDB

const userSchema = Schema({
    nombre:{type:String, required:[true,'Nombre es obligatorio']},
    email:{type:String, unique:true, required:[true,'email es obligatorio']},
    password:{type:String, required:[true,'password es obligatorio']},
    pais: {type:String, required:[true,'Por favor seleccione el pais donde reside']},
    fecha:{type: Date, default: Date.now},
    admin:{type: Boolean, default: false},
    data_pol:{type: Boolean, default: false, required:[true,'Sin su autorizacion para el tratamiento de sus datos no podra abrir una cuenta en OpenKnow']},
},
    {
        collection:"users"
});

module.exports = model('Users', userSchema);