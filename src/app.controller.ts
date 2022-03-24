import {Controller, Get, Res} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  ping(): any {
      throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

  @Get()
  redirect(@Res() res) {
    return res.redirect('/api');
  }
}
