import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { festivitiesController } from './festivities/festivities.controller';

@Module({
  imports: [],
  controllers: [AppController, festivitiesController],
  providers: [AppService],
})
export class AppModule {}
