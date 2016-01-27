var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/products");

var Item = mongoose.model("Item", {
  name: String,
  desc: String,
  cost: Number,
  count: Number
});

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
  //do stuff
  res.render('product', { id: req.body });
});

router.put("/:productId", function(req, res, next){

  res.send("Put received:", [req.body, {productId}]);
});

module.exports = router;
