import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { qaDto } from 'src/dtos/freqaskques.dto';
import { UserDetailsService } from 'src/user-details/user-details.service';
import { FreqAskQuesService } from './freq-ask-ques.service';

@Controller('freq-ask-ques')
export class FreqAskQuesController {
    constructor(private freqaskquesService:FreqAskQuesService,
                private userService:UserDetailsService){}
    @Get("findAnswer/?")
    async getAnswer(@Query() ques){     
        
        const result = await this.freqaskquesService.getAnswer(ques.ques);
        if(result){
            return result;
        }
        
        return {message:"No question found!"};
    }
    @Get("postQuestion/?")
    async postQuestion(@Query() ques,@CurrentUser() email:string) {
        const user = await this.userService.getUserbyEmail(email);
        await this.freqaskquesService.createQues(ques.ques,user.Customer_ID);
        return {message:"Qestion posted wait for reply!"};
    }
    @Post("postAnswer/")
    async postAnswer(@Body() body:qaDto,@CurrentUser() email:string) {
        const user = await this.userService.getUserbyEmail(email);
        return this.freqaskquesService.createAnswer(body,user.Customer_ID);
    }
}
