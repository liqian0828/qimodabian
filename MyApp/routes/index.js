var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let name = req.session.name || "";

  res.render('index', { name });
});

router.get('/Ha', function(req, res, next) {
  res.render('index', { title: 'My Express' });
});

module.exports = router;
