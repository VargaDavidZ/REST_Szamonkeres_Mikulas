import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GyerekModule } from './gyerek/gyerek.module';
import { AjandekModule } from './ajandek/ajandek.module';

@Module({
  imports: [GyerekModule, AjandekModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
