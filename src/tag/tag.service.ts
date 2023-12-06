import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { TagEntity } from "./tag.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TagService{

    // Repository helps us to interact with the database
    constructor(@InjectRepository(TagEntity)
     private readonly tagRepository: Repository<TagEntity>
     ){}

     async findAll(): Promise<TagEntity[]>{
        return await this.tagRepository.find();
    }
}