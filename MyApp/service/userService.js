const fs = require('fs');

var data = {
    users:[]
};

var data = JSON.parse(fs.readFileSync('./data/user.json', {encoding:'utf8'}));



console.log('load all user info');


function UserService(){

    /**
     * 添加用户
     * 添加用户的jons一定要有name和password
     * {
     *  name:'wf",
     *  password: 'vwf'
     * }
     * 
     * 后台重启之后添加的用户就丢了
     * 要是想保留新添加的用户，要调用persistence方法
     */
    this.add = function(User){
        if(User.hasOwnProperty('name') && User.hasOwnProperty('password')){
            data.users.push(User);
        }
    }
    /**
     * 保持所有用户
     */
    this.persistence = function(){
        var str = JSON.stringify(data);
        fs.writeFileSync('./data/user.json',str, {encoding:'utf8'});
    }
    /**
     * 通过用户名查找用户
     */
    this.getByName = function(name){
        const {users} = data;
        for (var key in users) {
            if (users[key].name === name) {
                return users[key];
            }
        }
        return null;
    }

    /**
     * 用户名是否存在，注册的时候会用到
     */
    this.isExist = function(name) {
        return this.getByName(name) ? true : false;
    }
}

var userService = new UserService();

module.exports = userService;

