var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Item = require("../models/item.js");

router.post("/", function(req, res, next){
  console.log("req.body:", req.body);

  var newItem = new Item({
    name: req.body.name,
    desc: req.body.desc,
    cost: req.body.cost,
    count: req.body.count
  })

  newItem.save(function (err, savedItem) {
    if (err) return console.error(err);
    res.send(savedItem); //also send ID to be attatched to the DOM as data("_id", id)
  });

})

/* GET home page. */
router.get('/:productId', function(req, res, next) {
  Item.findById(req.params.productId, function(err, item){
    if(err) return console.error(err);
    res.render('product', {'item': item});
  });
});

router.put("/:productId", function(req, res, next){

  res.send("Put received:", [req.body, {productId}]);
});

module.exports = router;
