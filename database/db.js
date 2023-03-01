const dotenv =require('dotenv')
const mongoose = require('mongoose');

dotenv.config({path: './database/config.env'})

const conn = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=> {
        console.log("DATABASE CONNECTED");
    }).catch((err) =>{
        console.log(err)
    })
}

module.exports =conn;
