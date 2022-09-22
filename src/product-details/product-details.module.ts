import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entities/producttable.entity';
import { ProductDetailsController } from './product-details.controller';
import { ProductDetailsService } from './product-details.service';


@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductDetailsController],
  providers: [ProductDetailsService]
})
export class ProductDetailsModule {}


