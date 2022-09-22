import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/entities/ordertable.entity';
import { WarrantyReturnController } from './warranty-return.controller';
import { WarrantyReturnService } from './warranty-return.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  controllers: [WarrantyReturnController],
  providers: [WarrantyReturnService]
})
export class WarrantyReturnModule {}
