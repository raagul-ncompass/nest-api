import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/producttable.entity';
import { User } from 'src/entities/usertable.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeliveryDateService {
    constructor(@InjectRepository(User) private userRepo:Repository<User>,
    @InjectRepository(Product) private productRepo:Repository<Product>){}
    async getDeliveryDays(pname:string,email:string){
        const {location} = await this.userRepo.findOne({
            where: [{ "Customer_Email": email}]});
        return await this.productRepo.createQueryBuilder('product_table')
        .select(`if(plocation='${location}',
        "one day delivery",
        "two day delivery")as deliveryestimatedays`)
        .where("Product_Name = :name",{name:pname})
        .getRawMany();
    }
}
