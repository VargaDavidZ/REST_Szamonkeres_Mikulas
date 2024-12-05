import { Module } from '@nestjs/common';
import { AjandekService } from './ajandek.service';
import { AjandekController } from './ajandek.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AjandekController],
  providers: [AjandekService,PrismaService],
})
export class AjandekModule {}
