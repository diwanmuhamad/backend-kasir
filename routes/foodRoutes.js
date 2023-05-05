const express = require("express");
const router = express.Router()
const Food = require('../models/foodModel')

router.route('/').get(async (req,res) => {
    const foods = await Food.find()
    res.status(200).json({message: "get all foods", data: foods})
})

router.route('/add').post(async (req,res) => {
    
    const {nama, foto, harga} = req.body
    const food = await Food.create({nama, foto, harga})
    res.status(201).json({message: "add foods", data: food})
})



module.exports = router