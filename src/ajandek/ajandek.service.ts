import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAjandekDto } from './dto/create-ajandek.dto';
import { UpdateAjandekDto } from './dto/update-ajandek.dto';
import { PrismaService } from 'src/prisma.service';
import { NotFoundError } from 'rxjs';

@Injectable()
export class AjandekService {


  db: PrismaService

  constructor(db: PrismaService)
  {
    this.db = db;
  }


  async create(createAjandekDto: CreateAjandekDto) {
    try{
      return await this.db.ajandek.create({
        data: createAjandekDto 
       })
    }
    catch{
      throw new BadRequestException("Helytelen bemeneti adatok")
    }
   
  }

  findAll() {
    return this.db.ajandek.findMany()
  }

  async findOne(id: number) {

    try
    {
      return await this.db.ajandek.findUniqueOrThrow({
        where: {id}
      })
    }
    catch{
      throw new NotFoundException("Nincs ilyen ajándék")
    }

  }

  async update(id: number, updateAjandekDto: UpdateAjandekDto) {
    try{
      return await this.db.ajandek.update({
        where: {id},
        data: updateAjandekDto
      })
    }
    catch{
      throw new BadRequestException("Helytelen bemeneti adatok")
    }
  }

  async remove(id: number) {
   try{
    await this.db.ajandek.delete({
      where: {id}
    })
    return true
   }
   catch{
    return false
   }
  }
}
