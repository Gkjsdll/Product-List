var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Item = require("../models/item.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  var itemsData;
  Item.find(function(err, existingItems) {
    if (err) return console.error(err)
    itemsData = existingItems;
  });
  res.render('index', {
    title: 'Product List',
    items: itemsData
  });
});

module.exports = router;
