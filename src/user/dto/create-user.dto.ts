import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, IsDateString, Matches, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ example: "João", description: "Nome completo do dono do gato" })
    @IsString()
    name: string;

    @ApiProperty({ example: "99999999999", description: "CPF com exatamente 11 dígitos numéricos (sem pontos ou traços)" })
    @IsString()
    @Matches(/^\d{11}$/, { message: 'CPF deve conter exatamente 11 dígitos numéricos' })
    cpf: string;

    @ApiProperty({ example: "11999999999", description: "Número de telefone com DDD (apenas números)" })
    @IsString()
    phoneNumber: string;

    @ApiProperty({ example: "joao@email.com", description: "E-mail válido do usuário" })
    @IsEmail()
    email: string;

    @ApiProperty({ example: "SenhaSegura123!", description: "Senha forte com letras maiúsculas, minúsculas, números e caracteres especiais" })
    @IsString()
    @IsStrongPassword({ minLength: 8, minUppercase: 1, minNumbers: 1, minSymbols: 1 }, { message: 'A senha deve ter no mínimo 8 caracteres, incluindo letra maiúscula, número e símbolo' })
    password: string;

    @ApiProperty({ example: "1990-05-20", description: "Data de nascimento no formato YYYY-MM-DD" })
    @IsDateString()
    dob: Date;
}
