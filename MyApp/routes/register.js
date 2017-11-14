var express = require('express');
var router = express.Router();
var userService = require('../service/userService');

router.get('/', function(req, res){
    res.sendfile(__dirname + "/zhuce.html");
})

/**
 * 发送注册请求的时候，
 * 用户名的应该用name，
 * 密码用password
 * 
 * 响应是json
 * 如果error是0 代表成功，
 * 否则失败
 */
router.post('/register', function(req, res){
    const {name, password} = req.body;
    if(userService.isExist(name)){
        /**
         * user name is exist
         */
        res.status(403).json({error:1, message:'用户名已存在'})
    } else {
        /**
         * 
         */
        let user = {
            name,
            password
        };
        userService.add(user);
        userService.persistence();
        res.status(200).json({error:0, message:'注册成功'});
    }
})


module.exports = router;