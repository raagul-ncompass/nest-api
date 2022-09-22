import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  Customer_Email:string;

  @Expose()
  Gender: string;

  @Expose()
  Contact: number;

  @Expose()
  Customer_Name:string;

  @Expose()
  Address:string;
}
