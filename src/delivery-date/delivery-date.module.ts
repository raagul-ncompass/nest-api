import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entities/producttable.entity';
import { User } from 'src/entities/usertable.entity';
import { DeliveryDateController } from './delivery-date.controller';
import { DeliveryDateService } from './delivery-date.service';

@Module({
  imports: [TypeOrmModule.forFeature([User,Product])],
  controllers: [DeliveryDateController],
  providers: [DeliveryDateService]
})
export class DeliveryDateModule {}
