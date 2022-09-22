import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FreqAskQues } from 'src/entities/freqaskques.entity';
import { User } from 'src/entities/usertable.entity';
import { UserDetailsModule } from 'src/user-details/user-details.module';
import { FreqAskQuesController } from './freq-ask-ques.controller';
import { FreqAskQuesService } from './freq-ask-ques.service';

@Module({
  imports: [TypeOrmModule.forFeature([FreqAskQues]),UserDetailsModule],
  controllers: [FreqAskQuesController],
  providers: [FreqAskQuesService]
})
export class FreqAskQuesModule {}
