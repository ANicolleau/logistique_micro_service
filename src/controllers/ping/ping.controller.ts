import { Controller, Get } from '@nestjs/common';
import {ApiResponse} from "@nestjs/swagger";

@Controller('api/ping')
export class PingController {
    @Get()
    @ApiResponse({status: 200, description: 'Allows to see if API is up or not.'})
    ping(): string {
        return 'Pong !';
    }
}
