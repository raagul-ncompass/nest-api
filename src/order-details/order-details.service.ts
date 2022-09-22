import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/producttable.entity';
import { Repository } from 'typeorm';
import { Order } from '../entities/ordertable.entity';

@Injectable()
export class OrderDetailsService {
    constructor(@InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(Product) private productRepo: Repository<Product>){}
    getOrderdata(email){
        return this.orderRepo.findOne({
            where:[{"Customer_Email":email}],
        });
    }
    async addOrderData(id,email){
        const [{price}] = await this.productRepo.createQueryBuilder('order_table')
        .select(`sum(product_price) as price`)
        .where("Product_ID = :id",{id:id})
        .execute();
        await this.orderRepo.createQueryBuilder()
            .insert()
            .into('order_table')
            .values({Customer_Email: email,Product_ID: id})
            .execute();
        return price;
    }
}






