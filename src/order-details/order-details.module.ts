import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetailsController } from './order-details.controller';
import { OrderDetailsService } from './order-details.service';
import { Product } from 'src/entities/producttable.entity';
import { User } from 'src/entities/usertable.entity';
import { Order } from 'src/entities/ordertable.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order,User,Product])],
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService]
})
export class OrderDetailsModule {}
