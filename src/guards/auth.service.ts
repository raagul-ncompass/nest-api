import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UserDetailsService } from '../user-details/user-details.service';
import * as md5 from 'md5';
import * as jwt from 'jsonwebtoken';



@Injectable()
export class AuthService {
    constructor(private usersService: UserDetailsService) {}
    
    async signin(email: string, password: string) {
        const user = await this.usersService.getUserbyEmail(email);
        if (!user) {
          throw new NotFoundException('user not found');
        }
        const hash = md5(password);
        if (hash!==user.Password) {
          throw new BadRequestException('bad password');
        }
        const token = jwt.sign({email : user.Customer_Email},process.env.SECRET);
        const result = {
          message:"THis is the Token!",
          token:token
        }
        return result;   
    }    
    async signUp(params){
      const users = await this.usersService.getUserbyEmail(params.Customer_Email);

      if (users)
      {
          return("Username aready in use")
      }
      const result = md5(params.Password)
      params.Password=result
      const user = await this.usersService.create({...params})
      return user;
  }
}
