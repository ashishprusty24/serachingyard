const express = require("express");

const cartmodel = require("../model/cartmodule");

const cartrouter = express.Router();

cartrouter.get("/", async (req, res) => {
  let cartdata = await cartmodel.find();
  res.send(cartdata);
});

cartrouter.post("/", async (req, res) => {
  try {
    let updatecartdata = await cartmodel.create(req.body);
    res.send(updatecartdata);
  } catch (e) {
    res.send(e.message);
  }
});


module.exports = cartrouter