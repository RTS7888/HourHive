import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private authService : AuthService
    ){}

    @Post('SignUp')
    
    SingUp(@Body() Body : any)  {
        // return "Hellow"
        return this.authService.Signup(Body);
    }


    @Post('SingIn')
    SignIn(@Body() Body : any){
        console.log(Body)
    }


    @Get("test")
    Test(){
        return "Test Working!"
    }
}
