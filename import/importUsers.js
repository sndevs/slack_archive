
module.exports = function(mongoose,impChannels,impMessages,closeConnection) {
    console.log('Importing Users');
    var usrjson = require('../archive/users.json')
    var userSchema = require('../schema/UserSchema.js');
    var userModel = mongoose.model('Users',userSchema)
    userModel.collection.insert(usrjson,function (err,result) {
        if(err) {
            return console.log(err);
        }
        impChannels(mongoose,impMessages,closeConnection);
    })

}
