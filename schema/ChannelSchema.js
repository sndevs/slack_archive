var mongoose = require('mongoose')

var Schema = mongoose.Schema
var ChannelSchema = new Schema({
    "id": String,
    "name": String,
    "created": Number,
    "creator": String,
    "is_archived": Boolean,
    "is_general": Boolean,
    "members": [{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }],
    "topic": {
        "value": String,
        "creator": String,
        "last_set": String,
    },
    "purpose": {
        "value": String,
        "creator": String,
        "last_set": String,
    }
})

module.exports = ChannelSchema
