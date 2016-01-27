var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

/* GET home page. */
router.get('/:productId', function(req, res, next) {
  //do stuff
  res.render('product', { id: req.body });
});

module.exports = router;
