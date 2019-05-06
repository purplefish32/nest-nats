# usage
docker-compose up -build

A nodejs emitter sends two different NATS payloads every 3 seconds to the 'sms.send' subject.
One is a 'Hello World!' string and one is a JSON object

The emitter allso listens to the 'sms.send' subject and logs the correct payload to the command line.

The nestjs app however listens to the 'sms.send' subject correctly but does not log the correct payload to the command line. Instead the payload is allways undefined.