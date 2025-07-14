const mongoose = require("mongoose");

const Connect = async ()=>{
    try {
         await mongoose.connect(process.env.MONGODB_URL,{
            dbName:'Portfolio'
        });
        const connection = mongoose.connection;
        connection.on('connction',()=>{
            console.log('Mongodb Connected Successfully');
        });
        connection.on('error',()=>{
            console.log('Error occurred mongodb could not be connected');
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = Connect