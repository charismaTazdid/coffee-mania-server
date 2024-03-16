import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get() // Decorator
  findAllMenue() {
    return 'this action will return all Menue';
  }
  @Get('list')
  findAllCoffee() {
    return 'this action will return all the coffee form coffee list';
  }
  // Dynamic search
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This will search and return single coffee from coffee list which id is ${id}`;
  }

  @Post()
  createCoffee(@Body() body) {
    return { message: 'I am inserting your Data', data: body };
  }
}
