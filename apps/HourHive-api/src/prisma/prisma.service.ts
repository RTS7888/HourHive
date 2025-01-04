import { Injectable } from '@nestjs/common';
import {PrismaClient} from '@prisma/client'
@Injectable()
export class PrismaService extends PrismaClient {
    

    constructor(){
       super({
        datasources : {
            db: {
                url:'postgresql://HiveDB_owner:FbgYyjul0cz4@ep-snowy-unit-a1w58qmw.ap-southeast-1.aws.neon.tech/HiveDB?sslmode=require'
            }
        }
       })
    }
}
