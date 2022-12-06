const express = require("express")
const { default: mongoose } = require("mongoose")
const cartrouter = require("./routes/cartroute")
const productrouter = require("./routes/productroute")
const cors = require('cors');
const app = express()

app.use(express.json())
app.use(cors());

app.get("/",(req,res)=>{
    res.send("hlw")
})

app.use("/cart",cartrouter)
app.use("/product",productrouter)


app.listen("7070",()=>{
    mongoose.connect("mongodb+srv://mongodb:mongodb@cluster0.pnj2fjf.mongodb.net/test")
    console.log("server working on port 7070");
})

