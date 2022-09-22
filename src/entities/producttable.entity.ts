import {
    AfterInsert,
    AfterRemove,
    AfterUpdate,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    OneToMany,
} from 'typeorm';
import { Order } from './ordertable.entity';
  
@Entity({name:'product_table'})
export class Product {
    @PrimaryGeneratedColumn()
    Product_ID: number;
    @Column({type:'varchar'})
    Product_Name: string;
    @Column({type:'varchar'})
    Product_Model: string;
    @Column()
    Availability:number;
    @Column()
    Ratings:number;
    @Column({type:'enum',enum: ['Tablet','Phone']})
    Type: string;
    @Column({type: 'bigint'})
    product_price:number;
    @Column()
    plocation: string;
    
    @AfterInsert()
    logInsert() {
        console.log('Inserted User with id');
    }
    @AfterUpdate()
    logUpdate() {
        console.log('Updated User with id');
    }

    @AfterRemove()
    logRemove() {
        console.log('Removed User with id');
    }
}
  