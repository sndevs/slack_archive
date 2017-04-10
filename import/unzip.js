var unzip = require('unzip')
module.exports = function getSlackZip() {
    fs =  require('fs');
    var dir = fs.readdirSync('../');
    var zipfile = null
    dir.forEach(function(file) {
        if(file.indexOf('.zip') > -1) {
            zipfile = file;
        }
    })
    return fs.createReadStream('../'+zipfile).pipe(unzip.Extract({ path: 'archive' }));
}
