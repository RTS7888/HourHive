import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private prisma : PrismaService){}


    async Signup(body:any){
        const username = body.username;
        const password = body.password;

        const user = await this.prisma.user.create({
            data:{
                username : username,
                password : password
            }
        })

        return user;

    }
}
