import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ){}

  async create (createUserDto: CreateUserDto): Promise<User> {
    
    const saltOrRounds = 8;
    const hashedPassword = await bcrypt.hash(createUserDto.password, saltOrRounds);


    const exists = await this.userRepository.findOne({where: {cpf: createUserDto.cpf}})
    
    if (exists) {
      throw new BadRequestException('CPF já cadastrado.')
    };

    const user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });


    return this.userRepository.save(user)
     
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOne({ where: {id}});
  }

  async update(id:string, updateUserDto: UpdateUserDto): Promise<User> {

    const user = await this.userRepository.findOne({ where: {id}})
    if (!user) {
      throw new NotFoundException(`Usuário com id ${id} não encontrado.`)
    }

    Object.assign(user, updateUserDto)

    return this.userRepository.save(user);
  }

  async remove(id: string) {

    const user = await this.userRepository.findOne({ where: {id}})
    if (!user) {
      throw new NotFoundException(`Usuário com id ${id} não encontrado.`)
    }

    return (await this.userRepository.delete(id));
  }

  async findByEmail(email: string) {
    return this.userRepository.findOne({ where: {email}})
  }
}
