import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpaceController } from './space/space.controller';
import { SpaceService } from './space/space.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, SpaceController],
  providers: [AppService, SpaceService],
})
export class AppModule {}
