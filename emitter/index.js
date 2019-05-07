var NATS = require('nats');
var nats = NATS.connect(
  "nats://nats:4222"
);

// Every 3s send out :
// - One "Hello world!" string via sms.send
// - One "Basic event" string via sms.event
// - One dummy json object via sms.send
// - One dummy json object via sms.event
setInterval(function () {
  console.log('Emitting string payloads');
  nats.publish('sms.send', 'Hello World!');
  nats.publish('sms.event', 'Basic event');
  console.log('Emitting JSON payloads');
  nats.publish('sms.send', JSON.stringify({ message: "JSON payload!" }));
  nats.publish('sms.event', JSON.stringify({ message: "JSON event!" }));
}, 3000);

// This works.
nats.subscribe('sms.send', function (msg, reply, subject) {
  console.log('Msg received on [' + subject + '] : ' + msg);
});

// This works.
nats.subscribe('sms.event', function (msg, reply, subject) {
  console.log('Msg received on [' + subject + '] : ' + msg);
});