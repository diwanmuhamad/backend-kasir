const mongoose = require('mongoose')

const foodSchema = mongoose.Schema({
    nama: {
        type: String,
        required: [true, "please add the name"]
    },
    foto: {
        type: String,
        required: [true, "please add the photos"]
    },
    harga: {
        type: Number,
        required: [true, "please add the price"]
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("Food", foodSchema)