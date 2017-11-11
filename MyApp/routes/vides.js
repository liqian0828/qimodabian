var express = require('express');
var router = express.Router();
var videoService = require('../service/videService');


router.get('/', function(req, res){
     var videos = videoService.getAll();
     res.render('video', {videos});
})

router.get("/:id", function(req, res){

})



module.exports = router;
