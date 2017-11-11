var fs = require('fs');

var data = JSON.parse(fs.readFileSync('./data/video.json', {encoding:'utf8'}));


function VideoService() {
    this.getAll = function(){
        return data.videos;
    }
    this.getById = function(id){
        const {videos} = data;
        for (var key in videos) {
            if(videos[key].id == id){
                return videos[key];
            }
        }
        return null;
    }
}

module.exports = new VideoService();

