import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/usertable.entity';
import { Repository } from 'typeorm';
import {Cache} from 'cache-manager'

@Injectable()
export class UserDetailsService {
    private readonly logger = new Logger();
    constructor(@InjectRepository(User) private userRepo: Repository<User>,
                @Inject(CACHE_MANAGER) private readonly CacheManager: Cache){}

    

    getAllData(){
        return this.userRepo.find();
    }
    deleteUserData(id){
        return this.userRepo.createQueryBuilder('user_table')
        .delete()
        .from("user_table")
        .where("Customer_ID = :id",{id: id})
        .execute();
    }
    async create(params) {
        const user = await this.userRepo.create({...params})
        return await this.userRepo.save(user)
    }
    async getUserbyEmail(email : string): Promise<User> {
        const value:string = await this.CacheManager.get(email);
        if(value){
            this.logger.log("fetched from redis!");
            return JSON.parse(value);
        }
        const user = await this.userRepo.findOne({
            where: [{ "Customer_Email": email}]          
        });
        await this.CacheManager.set(email,JSON.stringify(user));
        this.logger.log("fetched from database!")
        return user;
       
    }
    async getUserById(id ): Promise<User> {
        const value:string = await this.CacheManager.get(id);
        if(value){
            this.logger.log("fetched from redis!");
            return JSON.parse(value);
        }
        const user = this.userRepo.findOne({
            where: [{ "Customer_ID": id }],            
        });
        await this.CacheManager.set(id,JSON.stringify(user));
        this.logger.log("fetched from database!")
        return user;
    }
    async getUserOrderData(params,email){
        const redisResult:string = await this.CacheManager.get(String(params+email));
        if(redisResult){
            this.logger.log("fetched from redis!");
            return JSON.parse(redisResult);
        }
        params = params.split(',');
        const details = await this.userRepo.createQueryBuilder('user_table')
        .select(params)
        .innerJoin('order_table', 'o', 'user_table.Customer_Email= o.Customer_Email')
        .innerJoin('product_table', 'p', 'o.Product_ID= p.Product_ID')
        .where("user_table.Customer_Email = :mail",{mail:email})
        .getRawMany();
        await this.CacheManager.set(String(params+email),JSON.stringify(details));
        this.logger.log("FRom database!")
        return details;
    }
    async updateUser(id,body){
        console.log(id)
        const user = await this.getUserById(id);
        await this.userRepo.createQueryBuilder('user_table')
        .update('user_table')
        .set({...user,...body})
        .where("Customer_ID=:id",{id:id})
        .execute();
    }
    
}
