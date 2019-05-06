import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.NATS,
    options: {
      url: 'nats://nats:4222',
      queue: 'sms',
    },
  });
  app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
