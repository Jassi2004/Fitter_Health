const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const DB_URL = process.env.DB_URL;

const databaseConnection = async()=>{
    mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> {
        console.log('database connected successfully!');
    })
    .catch(()=>{
        console.log('error establishing connection to the database', error);
    })
}
module.exports = {databaseConnection};