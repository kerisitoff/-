const express = require("express")
const app = express()

const mongoose = require("mongoose")
require("dotenv/config")

const bodyParser = require('body-parser')

const cors = require('cors')

app.use(cors())

app.use(bodyParser.json())

app.get('/' , (req,res) => {
    res.send("主页")
})

const postRoute = require('./routes/posts')

app.use('/posts',postRoute)



mongoose.connect(process.env.DB_CONNECTION,{ useUnifiedTopology: true,useNewUrlParser: true },() => {
  console.log('connect DB!')
})



//监听端口
app.listen(4000)