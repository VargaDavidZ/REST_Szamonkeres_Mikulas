import { Injectable } from '@nestjs/common';
import { CreateAjandekDto } from './dto/create-ajandek.dto';
import { UpdateAjandekDto } from './dto/update-ajandek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AjandekService {


  db: PrismaService

  constructor(db: PrismaService)
  {
    this.db = db;
  }


  create(createAjandekDto: CreateAjandekDto) {
   return this.db.ajandek.create({
    data: createAjandekDto 
   })
  }

  findAll() {
    return this.db.ajandek.findMany()
  }

  findOne(id: number) {
    return this.db.ajandek.findUnique({
      where: {id}
    })
  }

  update(id: number, updateAjandekDto: UpdateAjandekDto) {
    try{
      return this.db.ajandek.update({
        where: {id},
        data: updateAjandekDto
      })
    }
    catch{
      return undefined
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
