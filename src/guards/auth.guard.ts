import { CanActivate, ExecutionContext, NotFoundException } from '@nestjs/common';
import * as jwt from "jsonwebtoken";
import { ApiError } from 'src/custom-errorclass/custom-errorclass';


export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    if(!request.headers["authorization"]){
      throw new NotFoundException("token not found")
    }
    let flage = false;
    const token = request.headers["authorization"];
    jwt.verify(token, process.env.SECRET ,function (err,data){
      if(err) {
          console.log("not authorized token!");
          throw new ApiError(401,"not authorized token!");
      }
      flage = true;   
    })
    return flage;
  }
}
// import { Injectable } from "@nestjs/common";
// import { AuthGuard } from "@nestjs/passport";
// @Injectable()
// export class JwtAuthGuard extends AuthGuard('jwt') {}