import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('sms.send')
  test(message) {
    console.log('function called OK');
    console.log(message); // Allways undefined
  }
}