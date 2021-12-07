//let user=""+process.env.NODE_USER;
//let pass=""+process.env.NODE_PASS;
const database= "openknow";

module.exports={
//cloud_db:`mongodb+srv://${user}:${pass}@cluster0.cu8u2.mongodb.net/${database}`,
//cloud_db:`mongodb+srv://${process.env.NODE_USER}:${process.env.NODE_PASS}@cluster0.cu8u2.mongodb.net/${database}`,
cloud_db:"mongodb+srv://remigioh:1234567890@cluster0.cu8u2.mongodb.net/openknow?retryWrites=true&w=majority",
  //  local_db:"mongodb://localhost:27017/db_web19"
local_db:`mongodb://localhost:27017/${database}`
}