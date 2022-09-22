import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entities/ordertable.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WarrantyReturnService {
    constructor(@InjectRepository(Order) private orderRepo:Repository<Order>) {}
    getWarrantyDetails(email:string){
        return this.orderRepo.createQueryBuilder('order-table')
        .select(`Customer_Email,
        Product_ID,
        dateofparchase,
        (dateofparchase + interval 1 year)as warrantyexpirydate,
        (dateofparchase + interval 7 day)as returnexpiredate`)
        .where("Customer_Email = :email",{email})
        .getRawMany();
    }
}
