var Pusher = require('pusher');

var pusher = new Pusher({
    appId: '313215',
    key: 'b088b407ba235be620a1',
    secret: '6ddcae279b1f84de7f00',
    cluster: 'eu',
    encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
    "message": "hello world"
});
