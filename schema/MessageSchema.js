var mongoose = require('mongoose')

var Schema = mongoose.Schema
var MessageSchema = new Schema({
    "chillin": String,
    "user": {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    subtype: String,
    created: Date,
    "text": String,
    "attachments": [{
        "fallback": String,
        "ts": Number,
        "author_subname": String,
        "channel_id": String,
        "channel_name": String,
        "is_msg_unfurl": Boolean,
        "text": String,
        "author_name": String,
        "author_link": String,
        "author_icon": String,
        "mrkdwn_in": [
            String
        ],
        "color": String,
        "from_url": String,
        "is_share": Boolean,
        "footer": String
    }],
    "ts": Number,
    "edited": {
        "user": String,
        "ts": Number
    },
    "file": {
        "id": String,
        "created": Number,
        "timestamp": Number,
        "name": String,
        "title": String,
        "mimetype": String,
        "filetype": String,
        "pretty_type": String,
        "user": String,
        "editable": Boolean,
        "size": Number,
        "mode": String,
        "is_external": Boolean,
        "external_type": String,
        "is_public": Boolean,
        "public_url_shared": Boolean,
        "display_as_bot": Boolean,
        "username": String,
        "url_private": String,
        "url_private_download": String,
        "permalink": String,
        "permalink_public": String,
        "edit_link": String,
        "preview": String,
        "preview_highlight": String,
        "lines": Number,
        "lines_more": Number,
        "preview_is_truncated": Boolean,
        "channels": [
            String
        ],
        "comments_count": Number,
        "initial_comment": {
            "id": String,
            "created": Number,
            "timestamp": Number,
            "user": String,
            "is_intro": Boolean,
            "comment": String,
            "channel": String
        },
        "reactions": [{
            "name": String,
            "users": [
                String
            ],
            "count": Number
        }]
    },
    "channel": {
        type: Schema.Types.ObjectId,
        ref: 'Channels'
    }
})

module.exports = MessageSchema
