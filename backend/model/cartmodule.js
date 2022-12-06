const { default: mongoose } = require("mongoose");

const cartschema = new mongoose.Schema({
  name: String,
  price: Number,
  size: String,
  img: String,
  qty: Number,
  decription: String,
  color:String
});


const cartmodel = mongoose.model("cart12",cartschema)

module.exports = cartmodel


