var mongoose = require('mongoose')
    var Schema = mongoose.Schema
    var userSchema = new Schema({
        "id": String,
        "team_id": String,
        "name": String,
        "deleted": Boolean,
        "status": Boolean,
        "color": String,
        "real_name": String,
        "tz": String,
        "tz_label": String,
        "tz_offset": Number,
        "profile": {
            "first_name": String,
            "last_name": String,
            "avatar_hash": String,
            "image_24": String,
            "image_32": String,
            "image_48": String,
            "image_72": String,
            "image_192": String,
            "image_512": String,
            "image_1024": String,
            "image_original": String,
            "fields": [],
            "title": String,
            "phone": String,
            "skype": String,
            "real_name": String,
            "real_name_normalized": String,
        },
        "is_admin": Boolean,
        "is_owner": Boolean,
        "is_primary_owner": Boolean,
        "is_restricted": Boolean,
        "is_ultra_restricted": Boolean,
        "is_bot": Boolean
    });
module.exports = userSchema
// User.collection.insert(usrlist,function(err,ret) {
//     if (err) {
//         console.log(err);
//
//     }
//     console.log(ret);
// })

// var channelSchema = new Schema({
//     id: String,
//     name: String
// })
// var messageSchema = new Schema({})
//
// var channel = mongoose.model('msgs', channelSchema, 'general')
// channel.findOne({}, function(err, res) {
//     console.log(res);
// })
//
// var user = mongoose.model('users', userSchema);
// // user.find({name:'abey'}).exec(function (err,users) {
// //     if(err) throw err;
// //     console.log(users);
// // })
// module.exports = {
//     userSchema,
//     channelSchema,
//     messageSchema
// }
