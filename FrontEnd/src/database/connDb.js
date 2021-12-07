const mongoose = require('mongoose');
const { local_db, cloud_db } = require('./urlDb');

class ConnDb{
    constructor(){ // metodo constructor
        this.connection();
       //console.log("User ->", process.env.NODE_USER);
       //console.log("Pass ->", process.env.NODE_PASS);
        
    }
    async connection(){
       // console.log("url ->", cloud_db);
        this.conn = await mongoose.connect(cloud_db);
        
        
    }
} 

module.exports=ConnDb;