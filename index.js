//Yuval Sultan 207467135
//Adi Gertel 206481129



const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
const routes = require('./routes/routes');
app.use('', routes)

const mongoString = process.env.DATABASE_URL

async function dbConnection(){
    try{
        await mongoose.connect(mongoString).then(() => console.log('Connected to database'));
    }
    catch(err){
        return {'status':'FAILED','msg':err};
    }
}

dbConnection()