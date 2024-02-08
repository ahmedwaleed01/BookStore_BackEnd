const mongoose = require('mongoose')
require('dotenv').config();

async function connect() {
    try{
        console.log(process.env.URI_MONGOOSE);
        await mongoose.connect(process.env.URI_MONGOOSE);
        console.log("connected to mongodb")

    }catch(err){
        console.log(err)
    }
}
 
module.exports = {connect};
