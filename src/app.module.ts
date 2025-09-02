import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { initDatabase } from './infra/database';

@Module({
  imports: [initDatabase()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
