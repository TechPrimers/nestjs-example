import { Controller, Get } from '@nestjs/common';
import { Space } from './space.interface';
import { SpaceService } from './space.service';

@Controller('space')
export class SpaceController {

    constructor(private spaceService: SpaceService) {}

    @Get() 
    getAstronauts():Promise<Space> {
        console.log('::: Retrieving Astronauts from space');
        return this.spaceService.getAstronauts();
    }
}
