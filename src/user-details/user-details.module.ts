import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from '../guards/auth.service';
import { UserDetailsController } from './user-details.controller';
import { UserDetailsService } from './user-details.service';
import { User } from '../entities/usertable.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserDetailsController],
  providers: [
    UserDetailsService,
    AuthService,
  ],
  exports:[UserDetailsService]
})
export class UserDetailsModule {}
