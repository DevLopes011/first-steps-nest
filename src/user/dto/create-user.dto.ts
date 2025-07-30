import { IsEmail, IsOptional, IsString, IsDateString, Matches, IsStrongPassword } from 'class-validator';

export class CreateUserDto {

    @IsString()
    name: string
 
    @IsString()
    @Matches(/^\d{11}$/, { message: 'CPF deve conter exatamente 11 dígitos numéricos' })
    cpf: string

    @IsString()
    phoneNumber: string

    @IsEmail()
    email: string

    @IsString()
    password: string

    @IsDateString()
    dob: Date
    
    
}
