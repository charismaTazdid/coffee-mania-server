import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get() // Decorator
  findAllMenue(@Res() res) {
    res.status(200).send('This action will return all the coffeee');
    // we can also utilize express response system by @Res decorator and with a parameter in our case it eis "res"
  }

  @Get('list')
  findAllCoffee() {
    return 'this action will return all the coffee form coffee list';
  }

  // using Query
  @Get('query')
  findAll2(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `This action will search and return particuller coffees, limit: ${limit}, offset: ${offset}`;
  }

  // Dynamic search
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This will search and return single coffee from coffee list which id is ${id}`;
  }

  // Post a Coffeee
  @Post()
  @HttpCode(HttpStatus.GONE) // we can change status code by this line of code
  createCoffee(@Body() body) {
    return { message: 'I am inserting your Data', data: body };
  }

  // Update Data
  @Patch(':id')
  updateCoffe(@Param('id') id: string, @Body() body) {
    return `this action will update the coffee id with: ${id} and updatable data is the ${body}`;
  }

  // Delete a Coffee with Id
  @Delete(':id')
  deleteCoffee(@Param('id') id: string) {
    return `This action will delete the coffee which id is ${id}`;
  }
}
