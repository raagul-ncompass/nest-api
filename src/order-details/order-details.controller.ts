import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { AuthGuard } from 'src/guards/auth.guard';
import { OrderDetailsService } from './order-details.service';

@Controller('order-details')
export class OrderDetailsController {
    constructor(private orderService: OrderDetailsService) {}
    @UseGuards(AuthGuard)
    @Get("/")
    GetOrderData(@CurrentUser() email:string){
        return this.orderService.getOrderdata(email);
    }
    @UseGuards(AuthGuard)
    @Post("/buynow")
    async AddOrderDetails(@Body() {id},@CurrentUser() email:string){
        const price = await this.orderService.addOrderData(id,email)
        return {message: "the price to pay = " + price};
    }
}
