import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern<string>('sms.send')
  test1(data: any): any {
    console.log('message pattern handler called'); // This works.
    console.log(data); // Allways undefined.
  }

  @EventPattern<string>('sms.event')
  test2(data: any): any {
    console.log('event pattern handler called'); // This works.
    console.log(data); // Allways undefined.
  }
}