var NATS = require('nats');
var nats = NATS.connect(
  "nats://nats:4222"
);

setInterval(function () {
  console.log('Emitting string payload');
  nats.publish('sms.send', 'Hello World!');
  console.log('Emitting JSON payload');
  nats.publish('sms.send', JSON.stringify({ message: "JSON payload!" }));
}, 3000);

nats.subscribe('sms.send', function (msg, reply, subject) {
  console.log('Msg received on [' + subject + '] : ' + msg);
});