import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}


    @Post()
    create(@Body() createCatDto: CreateCatDto ) {
        console.log('Corpo recebido:', createCatDto); 
        return this.catsService.create(createCatDto)
    }

    @Get()
    findAll() {
        return this.catsService.findAll()
    }
}
