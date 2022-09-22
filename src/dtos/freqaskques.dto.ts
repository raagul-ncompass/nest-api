import { IsString } from "class-validator";

export class qaDto{
    @IsString()
    ques:string;
    @IsString()
    answer:String;
}