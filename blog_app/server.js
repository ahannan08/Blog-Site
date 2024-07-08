const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');


//comment,post and user routes

//init
const app = express()

//middleware
app.use(bodyParser.json())

//mongo
mongoose.connect("mongodb+srv://messi:messi@blogdb.k7monut.mongodb.net/?retryWrites=true&w=majority&appName=BlogDB")

//users
app.use("/users",userRoutes)
app.use("/posts",postRoutes)
app.use("/posts",commentRoutes)


//port
app.listen(3000 , ()=>{
    console.log("connected to the port")
})