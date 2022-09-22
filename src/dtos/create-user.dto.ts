import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  Customer_ID:string;
  @IsString()
  Customer_Name:string;
  @IsNumber()
  Contact:number;
  @IsEmail()
  Customer_Email:string;
  @IsString()
  Password: string;
  @IsString()
  Gender: string;
  @IsString()
  Address:string;
  @IsString()
  location:string;
}
