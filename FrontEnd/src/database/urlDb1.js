const database = "db_web19";

module.exports={
    cloud_db: `mongodb+srv://${process.env.NODE_USER}:${process.env.NODE_PASS}@misiontic-upb.xh03m.mongodb.net/${database}`,
    local_db: `mongodb://localhost:27017/${database}`
}