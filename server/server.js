var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/slack_archive');

var MessageSchema = require('../schema/MessageSchema')
var UserSchema = require('../schema/UserSchema')
var ChannelSchema = require('../schema/ChannelSchema')
var MessageModel = mongoose.model('Messages', MessageSchema)
var UserModel = mongoose.model('Users', UserSchema);
var ChannelModel = mongoose.model('Channels', ChannelSchema);


var rowlimit = 50;
var express = require('express')
var app = express()
app.get('/api/channels', function(req, res) {
    ChannelModel.find({}).select('id name').exec(function(err, ret) {
        res.json(ret)
    })
})
app.get('/api/timerange', function(req, res) {
    ChannelModel.findOne({
        name: 'general'
    }).exec(function(err, channel) {
        var start = new Date(2016, 0, 04)
        var end = new Date(2016, 0, 10)
        MessageModel.find({
            channel: channel._id,
            created: {
                "$gte": start,
                "$lt": end
            }
        }).limit(43).sort({
            ts: 'asc'
        }).exec(function(err, ret) {
            console.log(ret);
            res.json(ret)
        })
    })
})
app.get('/api/users', function(req, res) {
    UserModel.find({}, 'name id', function(err, ret) {
        res.json(ret)
    })
})
app.get('/api/users/:id', function(req, res) {})
app.get('/api/users/:id/messages', function(req, res) {})
app.get('/api/users/:id/channels', function(req, res) {
    channels.find({
        members: req.params.id
    }, ['id', 'name'], function(err, ret) {
        res.json(ret)
    })
})

app.get('/api/channels/:_id/messages', function(req, res) {
    console.log(req.query.page);
    var recnum = parseInt(req.query.page) || 1
    var pageoffset = recnum - 1;
    var recordoffset = pageoffset * rowlimit
    MessageModel.find({channel:req.params._id}).populate('user').select().limit(rowlimit).skip(recordoffset).sort({
        ts: 'asc'
    }).exec(function(err, ret) {
        res.json(ret)
    })
})
app.get('/api/channels/:id/members', function(req, res) {
    ChannelModel.findOne({
        id: 'C0E2G2681'
    }).populate('members').exec(function(err, channel) {
        res.json(channel)
    })
})

app.get('/api/joinedmessages', function(req, res) {
    ChannelModel.findOne({
        name: 'general'
    }).exec(function(err, channel) {
        MessageModel.find({
            subtype: 'channel_join',
            channel: channel._id
        }).populate('user').select().sort({
            ts: 'asc'
        }).exec(function(err, ret) {
            console.log(ret);
            res.json(ret)
        })
    })

})
app.get('/api/channels/:_id/rowcount', function(req, res) {
    MessageModel.find({
        channel: req.params._id
    }).count({}, function(err, count) {
        res.send('' + count)
    })

})
app.get('/users')
var port = 3000
app.listen(port, function() {
    console.log('Example app listening on port ' + port + '!')
})
process.on('exit', function() {
    mongoose.connection.close()
})
