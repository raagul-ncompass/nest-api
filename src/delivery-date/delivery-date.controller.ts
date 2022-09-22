import { Controller, Get, Query } from '@nestjs/common';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { DeliveryDateService } from './delivery-date.service';

@Controller('delivery-date')
export class DeliveryDateController {
    constructor(private DeliveryService:DeliveryDateService){}

    @Get("/getdaysofdelivery/?")
    getDeliveryDays(@Query() {pname},@CurrentUser() email:string){
        return this.DeliveryService.getDeliveryDays(pname,email);
    }
}
