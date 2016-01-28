"use strict";

var mongoose = require("mongoose")

var Item;

var itemSchema = mongoose.Schema({
  name: {type: String},
  desc: {type: String},
  cost: {type: Number},
  count: {type: Number}
});

Item = mongoose.model("Item", itemSchema);

module.exports = Item;
