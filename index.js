var Pusher = require('pusher');
var Config = require("./config.json");

var pusher = new Pusher(Config.pusher);

pusher.trigger('my-channel', 'my-event', {
    "message": "hello world"
});
