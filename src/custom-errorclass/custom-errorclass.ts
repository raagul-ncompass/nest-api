import { HttpException } from "@nestjs/common";

export class ApiError extends HttpException{
    constructor(statusCode:number,message:string){
        super(message,statusCode);
    }    
}