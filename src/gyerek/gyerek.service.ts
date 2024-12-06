import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateGyerekDto } from './dto/create-gyerek.dto';
import { UpdateGyerekDto } from './dto/update-gyerek.dto';
import { PrismaService } from 'src/prisma.service';
import { Ajandek } from 'src/ajandek/entities/ajandek.entity';

@Injectable()
export class GyerekService {

  db: PrismaService

  constructor(db: PrismaService)
  {
    this.db = db;
  }





  async addToyToChild(childId: number, toyId: number) {
    try{
      return await this.db.gyerek.update({
        where: { id: childId },
        data: {
          ajandek: {
            connect: { id: toyId }
          }
        },
        include: {
          ajandek: true
        }
      });
    }
    catch{
      throw new NotFoundException("Hibás Gyerek/Ajándék Id")
    }
    
  }

  async deleteToyFromChild(childId: number, toyId: number)
  {

    try{
      return await this.db.gyerek.update({
        where: {id: childId},
        data:{
          ajandek: {
            disconnect: {id:toyId}
          }
        },
        include: {
          ajandek: true
        }
      })
    }
    catch
    {
      throw new NotFoundException("Nincs ilyen Gyerek/Ajándék a megadott id-vel")
    }

    
  }

 


  async create(createGyerekDto: CreateGyerekDto) {
    try
    {
      return await this.db.gyerek.create({
        data:createGyerekDto
      })
    }
    catch{
      throw new BadRequestException("Helytelen bemeneti adatok")
    }
    
  }

  findAll() {
    return this.db.gyerek.findMany()
  }

  async findOne(id: number) {
    try{
      return await this.db.gyerek.findUniqueOrThrow({
        where: {id}
      })
    }
    catch(e)
    {
      throw new NotFoundException("Nincs ilyen gyerek")
    }
    
  }

  async update(id: number, updateGyerekDto: UpdateGyerekDto) {
   try{
    return await this.db.gyerek.update({
      where: {id},
      data: updateGyerekDto
    })
   }
   catch{
    return new BadRequestException("Helytelen bemeneti adatok")
   }
  }

  async remove(id: number) {
    try{
      await this.db.gyerek.delete({
        where: {id}
      })
      return true
    }
    catch{
      return false
    }
   
  }
}
