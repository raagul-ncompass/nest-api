import { IsOptional } from 'class-validator';
export class FilterDto{
    @IsOptional()
    Rating:number=5;
    @IsOptional()
    Type:string;
    @IsOptional()
    limit:number;
    @IsOptional()
    offset:number;
    @IsOptional()
    sort:string;
    @IsOptional()
    product_price:number;
    @IsOptional()
    Product_Name: string;
}
