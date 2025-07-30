import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';


@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
    ) {}

    @Post('login')
    async login (@Body() Body: { email: string; password: string}) {
        const user = await this.userService.findByEmail(Body.email)
        if (!user) {
            throw new UnauthorizedException('Credenciais inválidas.')
        }

        const isPasswordValid = await bcrypt.compare(Body.password, user.password)
        if (!isPasswordValid) {
            throw new UnauthorizedException('Credenciais Inválidas')
        }

        return this.authService.login(user)


    }
}
