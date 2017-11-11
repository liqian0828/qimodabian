var express = require('express');
var router = express.Router();
var userService = require('../service/userService');


router.get('/', function (req, res) {
    res.render('login', { errormessage: '' });
});

router.post('/login', function (req, res) {
    var uname = req.body.uname,
        upwd = req.body.upwd;
        
    let user = userService.getByName(uname);
    if(user && user.password === upwd){
        console.error('success login');
        res.status(200).json({errormessage:'login success'});
    } else {
        res.send(403, { errormessage: 'name is not exist or wrong password!' });
    }
});

module.exports = router;