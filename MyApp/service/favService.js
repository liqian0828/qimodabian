var fs = require('fs');

var data = JSON.parse("");
function FavService(){

    this.add = function(name, category, id){
        data[name][category].push(id);
    }

}


module.exports = new FavService();