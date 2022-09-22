import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./producttable.entity";


@Entity({name:'order_table'})
export class Order{
    @Column()
    Customer_Email: string;
    @Column()
    Product_ID: number;
    @Column()
    dateofparchase:Date;
    @PrimaryGeneratedColumn()
    orderid:number;

}