import { BadRequestException, Controller, Get, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { AuthGuard } from 'src/guards/auth.guard';
import { WarrantyReturnService } from './warranty-return.service';

@Controller('warranty-return')
export class WarrantyReturnController {
    constructor(private warrantyReturnService:WarrantyReturnService){}
    
    @UseGuards(AuthGuard)
    @Get("/details/")
    async CheckWarranty(@CurrentUser() email:string){
        const result = await this.warrantyReturnService.getWarrantyDetails(email);
        if(!result){
            throw new BadRequestException("no orders!")
        }
        return result;
    }
}
