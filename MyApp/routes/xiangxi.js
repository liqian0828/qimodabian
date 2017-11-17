var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let name = req.session.name || "";
  res.render('xiangxi', {name});
});

module.exports = router;
