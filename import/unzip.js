var unzip = require('unzip');
var path = require('path');
var zippath = path.join(__dirname,'..');
console.log('dirname'+ __dirname)
getSlackZip()
function getSlackZip() {
    fs =  require('fs');
    console.log(__dirname)
    var dir = fs.readdirSync(zippath);
    var zipfile = null
    dir.forEach(function(file) {
        console.log(file)
        if(file.indexOf('.zip') > -1) {
            zipfile = file;
        }
    })
    return fs.createReadStream(path.join(zippath,zipfile)).pipe(unzip.Extract({ path: 'archive' }));
}
module.exports = getSlackZip
