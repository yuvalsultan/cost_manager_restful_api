//Yuval Sultan 207467135
//Adi Gertel 206481129

const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    id: {
        required: true,
        type: Number
    },
    first_name: {
        required: true,
        type: String
    },
    last_name: {
        required:true,
        type:String
    },
    birthday: {
        required:true,
        type:String
    }
})
// id, first_name, last_name, and birthday

const costsSchema = new mongoose.Schema({
    user_id: {
        required: true,
        type: Number
    },
    year: {
        required: true,
        type: Number
    },
    month: {
        required:true,
        type:Number
    },
    day:{
        required:true,
        type:String
    },
    id:{
        required:true,
        type:Number
    },
    description:{
        required:true,
        type:String
    },
    category:{
        required:true,
        type:String,
        enum: {
            values: ['food','health','housing','sport','education','transportation','other'],
            message: '{VALUE} is not supported'
        }
    },
    sum:{
        required:true,
        type:Number
    }

})
//user_id, year, month, day, id, description, category, and sum

const categorySchema = new mongoose.Schema({
    food:[],
    health:[],
    housing:[],
    sport:[],
    education:[],
    transportation:[],
    other:[]
})
// food, health, housing, sport, education, transportation, and other
const Users = mongoose.model('user', usersSchema)
const Costs = mongoose.model('cost',costsSchema)
const Category = mongoose.model('category', categorySchema)


module.exports = {Users,Costs,Category}