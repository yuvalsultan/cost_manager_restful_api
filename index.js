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
mongoose.connect(mongoString);
const database = mongoose.connection
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');z
})
