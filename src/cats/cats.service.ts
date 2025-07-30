import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cat } from "./cat.entity";
import { Repository } from "typeorm";
import { CreateCatDto } from "./dto/create-cat.dto";

@Injectable()
export class CatsService {
    
    constructor(
        @InjectRepository(Cat)
        private catsRepository: Repository<Cat>      
        
    ) {}

    create(createCatDto: CreateCatDto): Promise<Cat>{
        console.log("entro no controlles")
        const cat = this.catsRepository.create(createCatDto);
        return this.catsRepository.save(cat)
    }

    findAll(): Promise<Cat[]>{
        return this.catsRepository.find()
    }
    
}