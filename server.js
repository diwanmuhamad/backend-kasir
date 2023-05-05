const express = require("express")
const cors = require('cors')
const dotenv = require("dotenv").config()
const connectDb = require('./config/dbConnection')

connectDb()
const app = express()

const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json({limit: '2mb'}))
app.use("/api/foods", require("./routes/foodRoutes"))

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})