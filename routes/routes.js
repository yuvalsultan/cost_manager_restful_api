//Yuval Sultan 207467135
//Adi Gertel 206481129



const express = require('express');
const about = require('../about.json');
const Model = require('../model/model.js');
const {Costs, Category} = require("../model/model");
const {response} = require("express");
const router = express.Router()
module.exports = router;


cost_id=1


router.post('/addcost', async (req, res) => {
    const cost = new Costs({
        user_id: req.body.user_id,
        year: req.body.year,
        month: req.body.month,
        day: req.body.day,
        id: cost_id,
        description:req.body.description,
        category:req.body.category,
        sum:req.body.sum
    })
    cost_id++

    await cost.save().then((response) => {
        res.send("cost saved")
    }).catch((response) =>
    {
        res.send("error occurred")
    })

    const my_category = req.body.category
    const doc = await Category.findOne()

    if (my_category == "food"){
        doc.food.push(cost)
    }
    if (my_category == "health"){
        doc.health.push(cost)
    }
    if (my_category == "housing"){
        doc.housing.push(cost)
    }
    if (my_category == "sport"){
        doc.sport.push(cost)
    }
    if (my_category == "education"){
        doc.education.push(cost)
    }
    if (my_category == "transportation"){
        doc.transportation.push(cost)
    }
    if (my_category == "other"){
        doc.other.push(cost)
    }

    await doc.save()
})

router.get('/report', async (req,res) => {
    try {
        let year = req.body.year
        let month = req.body.month
        let user_id = req.body.user_id

        const data = await Category.find({year: year, month: month, user_id: user_id});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }

})
router.get('/about', async (req,res)=> {
    res.send(JSON.stringify(about));
})

