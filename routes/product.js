var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Item = require("../models/item.js");

router.post("/", function(req, res, next){
  var newItem = new Item({
    name: req.body.name,
    desc: req.body.desc,
    cost: req.body.cost,
    image: req.body.image,
    count: req.body.count
  })

  newItem.save(function (err, savedItem) {
    if (err) return console.error(err);
    res.send(savedItem);
  });

})

router.get('/:productId', function(req, res, next) {
  Item.findById(req.params.productId, function(err, item){
    if(err) return console.error(err);
    res.render('product', {'item': item});
  });
});

router.put("/:productId", function(req, res, next){
  Item.findById(req.params.productId, function(err, item){
    if(err) return console.error(err);
    item.update(req.body, function(err, raw){
      if (err) return console.error(err);
    });
  })
  res.send("Put received:", req.params.productId);
});

router.delete("/:productId", function(req, res, next){
  Item.findById(req.params.productId, function(err, item){
    if(err) return console.error(err);
    res.send("Item removed.");
  })
  .remove(function(err, res){
    if(err) return  console.error(err);
  })
})

module.exports = router;
