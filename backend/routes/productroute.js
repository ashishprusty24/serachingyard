const express = require("express");

const productmodel = require("../model/productmodule");

const productrouter = express.Router();

productrouter.get("/", async (req, res) => {
  let productdata = await productmodel.find();
  res.send(productdata);
});

productrouter.get("/:id", async (req, res) => {
  try {
    let getproductdata = await productmodel.find({_id:req.params.id});
    res.send(getproductdata);
  } catch (e) {
    res.send(e.message);
  }
});


module.exports = productrouter

