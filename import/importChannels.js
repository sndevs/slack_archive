function importChannels(mongoose,impMessages,closeConnection) {
    console.log('Importing Channels');
    var channelSchema = require('../schema/ChannelSchema.js')
    var channelModel = mongoose.model('Channels', channelSchema)
    var channels = require('../archive/channels.json')
    var userModel = mongoose.model('Users', require('../schema/UserSchema.js'));
    var cl = channels.length;
    var clf = 0;
    channels.forEach(function(channel) {
        userModel.find({}).where('id').in(channel.members).select('_id').exec(function(err, res) {
            channel.members = res.map(user => {
                return user._id
            })
            var cmodel = new channelModel(channel);
            cmodel.save(function(err, resp) {
                if (err) {
                    return console.log('error:' + err);
                }

                clf++
                if (clf == cl) {
                    impMessages(mongoose,closeConnection)
                }
            })
        })

    })

}
module.exports = importChannels
