import { Controller, Get, Query, UseGuards,} from '@nestjs/common';
import { UserOrderDto } from 'src/dtos/order-details.dto';
import { FilterDto } from 'src/dtos/product-details.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ProductDetailsService } from './product-details.service';


@Controller('product-details')
export class ProductDetailsController {
    constructor(private productdetailService: ProductDetailsService){}
    
    @Serialize(UserOrderDto)
    @UseGuards(AuthGuard)
    @Get("query/?")
    getProductDetails(@Query() query:FilterDto){
        return this.productdetailService.getProductData(query)
       
    }
    @Get("/allproductdata")
    getAllUserData(){
        return this.productdetailService.getAllData();
    }
}
