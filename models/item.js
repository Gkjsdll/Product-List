"use strict";

var mongoose = require("mongoose")

var Item;

var itemSchema = mongoose.Schema({
  name: String,
  desc: String,
  cost: Number,
  count: Number
});

Item = mongoose.model("Item", itemSchema);

module.exports = Item;
