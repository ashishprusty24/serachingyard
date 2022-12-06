const { default: mongoose } = require("mongoose");

const productschema = new mongoose.Schema({
    name_arr: Array,
    img_arr: Array,
  price: Number,
  description: String,
});


const productmodel = mongoose.model("product",productschema)

module.exports = productmodel


