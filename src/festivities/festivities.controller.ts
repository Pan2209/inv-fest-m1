import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { create_festivities_Dto } from './dto/create_festivities.dto';

@Controller('festivities')
export class festivitiesController {

  @Get ()
findAll():string{
  return 'This action return all festivities';
  }

  @Get(':id')
  findOne(@Param('id')id:string):string{
    return `This action returns this invented fastivitie: ${id} `;
  }

@Post()
async create(@Body() create_festivities_Dto :create_festivities_Dto ){
    return `This action adds a new festivitie`;
}
}