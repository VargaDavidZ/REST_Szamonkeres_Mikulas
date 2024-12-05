import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AjandekService } from './ajandek.service';
import { CreateAjandekDto } from './dto/create-ajandek.dto';
import { UpdateAjandekDto } from './dto/update-ajandek.dto';

@Controller('toys')
export class AjandekController {
  constructor(private readonly ajandekService: AjandekService) {}

  @Post()
  create(@Body() createAjandekDto: CreateAjandekDto) {
    return this.ajandekService.create(createAjandekDto);
  }

  @Get()
  findAll() {
    return this.ajandekService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ajandekService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAjandekDto: UpdateAjandekDto) {
    return this.ajandekService.update(+id, updateAjandekDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ajandekService.remove(+id);
  }
}
