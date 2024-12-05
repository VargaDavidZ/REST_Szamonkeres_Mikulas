import { Injectable } from '@nestjs/common';
import { CreateGyerekDto } from './dto/create-gyerek.dto';
import { UpdateGyerekDto } from './dto/update-gyerek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GyerekService {

  db: PrismaService

  constructor(db: PrismaService)
  {
    this.db = db;
  }





  async addToyToChild(childId: number, toyId: number) {
    return await this.db.gyerek.update({
      where: { id: childId },
      data: {
        ajandek: {
          connect: { id: toyId }
        }
      }
    });
  }

  async deleteToyFromChild(childId: number, toyId: number)
  {
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

 


  create(createGyerekDto: CreateGyerekDto) {
    return this.db.gyerek.create({
      data:createGyerekDto
    })
  }

  findAll() {
    return this.db.gyerek.findMany()
  }

  findOne(id: number) {
    return this.db.gyerek.findUnique({
      where: {id}
    })
  }

  update(id: number, updateGyerekDto: UpdateGyerekDto) {
   try{
    return this.db.gyerek.update({
      where: {id},
      data: updateGyerekDto
    })
   }
   catch{
    return undefined
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
