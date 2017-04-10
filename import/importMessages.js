var fs = require('fs');
var _ = require('lodash')
console.log(__dirname);
function importMessages(mongoose,closeConnection) {
    console.log('Importing Messages');
    var MessageSchema = require('../schema/MessageSchema');
    var messageModel = mongoose.model('Messages', MessageSchema);
    var channelSchema = require('../schema/ChannelSchema.js')
    var channelModel = mongoose.model('Channels', channelSchema)
    var userSchema = require('../schema/UserSchema.js');
    var userModel = mongoose.model('Users', userSchema);
    channelModel.find({}).select('name id').exec(function(err, channels) {
        userModel.find({}).select('id name').exec(function(err, users) {
            var cl = channels.length;
            var clf = 0;
            var msgcount = 0
            channels.forEach(function(channel) {
                var channeldir = __dirname+'/../archive/' + channel.name
                var files = fs.readdirSync(channeldir)
                var messages = []
                files.forEach(function(file) {
                    messages = messages.concat(require(channeldir + '/' + file))
                })
                messages.forEach(function(message) {
                    message.channel = channel._id;
                    var user = _.find(users,{id:message.user})
                    message.created = new Date(parseInt(message.ts.replace('.','').substring(0,13)));
                    if(user != undefined) {
                        message.user = user._id
                    }
                })
                msgcount = msgcount + messages.length
                console.log('channel: ' + channel.name + ' - Message Count: ' + messages.length);
                messageModel.collection.insert(messages, function(err, result) {
                    clf++
                    if (clf == cl) {
                        closeConnection(mongoose)
                    }
                })
            })
        })
    })
}
function getUserObject(users) {
    for ( var x in users) {
        console.log(users[x].id);
    }
    return 'hello world'
}

module.exports = importMessages
