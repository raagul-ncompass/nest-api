import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    if(!request.headers["authorization"]){
      throw new UnauthorizedException("signin plz!")
    }
    const token = request.headers["authorization"];
    const {email} = jwt.decode(token)as {email:string};
    return email;
  },
);
