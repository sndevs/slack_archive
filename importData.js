var mongoose = require('mongoose')
var dburl = 'mongodb://localhost/slack_archive'
var db = mongoose.createConnection(dburl)
var impUser = require('./import/importUsers')
var impChannels = require('./import/importChannels');
var impMessages = require('./import/importMessages');
var uzip = require('./import/unzip');
var unziparchive = uzip()
unziparchive.on('close',function() {
    impUser(db,impChannels,impMessages,closeConnection)
})


function closeConnection(mongoose){
    console.log('closing connection');
    mongoose.close();
    process.exit();
}
