import { Expose } from 'class-transformer';

export class UserOrderDto {
  @Expose()
  Customer_Email:string;
  @Expose()
  Contact: number;
  @Expose()
  Customer_Name:string;
  @Expose()
  Address:string;
  @Expose()
  Product_ID: string;
  @Expose()
  Product_Name: string;
  @Expose()
  Product_Model: string;
  @Expose()
  Availability:number;
  @Expose()
  Ratings:number;
  @Expose()
  Type: string;
  @Expose()
  product_price:number;  
  @Expose()
  token:string;
  @Expose()
  message:string;
  @Expose()
  location:string;
  @Expose()
  Gender:string;
  @Expose()
  Customer_ID:string;
  @Expose()
  result:any;
  @Expose()
  age:number;
}
