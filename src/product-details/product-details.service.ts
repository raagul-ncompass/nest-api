import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterDto } from 'src/dtos/product-details.dto';
import { Repository } from 'typeorm';
import {Cache} from 'cache-manager'
import { Product } from 'src/entities/producttable.entity';

@Injectable()
export class ProductDetailsService {
    private readonly logger = new Logger();
    constructor(@InjectRepository(Product) private repo: Repository<Product>,
    @Inject(CACHE_MANAGER) private readonly CacheManager: Cache){}

    getAllData(){
        return this.repo.find();
    }
    
    async getProductData(params:FilterDto){
        const redisResult:string = await this.CacheManager.get(String(params));
        if(redisResult){
            this.logger.log("fetched from redis!");
            return JSON.parse(redisResult);
        }
        const value = this.repo.createQueryBuilder('product_table')
        .select(["Product_ID",
        "Product_Name",
        "Product_Model",
        "Availability",
        "Ratings",
        "Type",
        "product_price"])
        if(params.Rating)
        value.where('Ratings >= :Rating ',{Rating: params.Rating})
        if(params.Type)
        value.andWhere('Type = :Type',{Type: params.Type})
        if(params.product_price)
        value.andWhere('product_price = :price',{price: params.product_price})
        if(params.Product_Name)
        value.andWhere('Product_Name = :pname',{pname: params.Product_Name})
        if(params.sort)value.orderBy(params.sort)
        if(params.limit)value.limit(params.limit)
        if(params.offset)value.offset(params.offset)
        const details = await value.getRawMany()
        await this.CacheManager.set(String(params),JSON.stringify(details));
        this.logger.log("fetched from databse!");
        return details;
   
    }
}

