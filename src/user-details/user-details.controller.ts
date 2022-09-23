import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UseFilters, UseGuards, } from "@nestjs/common";
import { ApiError } from "src/custom-errorclass/custom-errorclass";
import { CurrentUser } from "src/decorators/current-user.decorator";
import { CreateUserDto } from "src/dtos/create-user.dto";
import { loginUserDto } from "src/dtos/login-user.dto";
import { UserOrderDto } from "src/dtos/order-details.dto";
import { HttpExceptionFilter } from "src/excepion-filter/custom-exception.filter";
import { AuthGuard } from "src/guards/auth.guard";
import { Serialize } from "src/interceptors/serialize.interceptor";
import { AuthService } from "../guards/auth.service";
import { UserDetailsService } from "./user-details.service";


@Serialize(UserOrderDto)
@Controller('user-details')
export class UserDetailsController {
    private readonly logger = new Logger();
    constructor(private userdetailService: UserDetailsService,
        private AuthService: AuthService){}

    @UseGuards(AuthGuard)
    @Get('/currentUser')
    async getUserdetails(@CurrentUser() usermail:string){
        const result = await this.userdetailService.getUserbyEmail(usermail);
        this.logger.log("fetching current user...");
        return result;
    }
    @UseFilters(new HttpExceptionFilter())
    @Post('/signup')
    async signupUser(@Body() body:CreateUserDto) {
        const result = await this.AuthService.signUp(body);
        return({
            message:"operation success",
            result:result
        });
    }
    @Put("/update/userdata/:id")
    async updateUser(@Body() body,@Param() {id}) {
        const result = await this.userdetailService.updateUser(id,body);
        return ({
            message:"operation success",
            result:result
        });
    }
    @UseGuards(AuthGuard)
    @UseFilters(new HttpExceptionFilter())
    @Get('/throwerr')
    throwError(){
        throw new ApiError(500,"trying to throw error");
    }
    @Delete("/delete/userdata/:id")
    deleteUserData(@Param() {id}){
        return ({
            message:"operator success",
            result: this.userdetailService.deleteUserData(id)
        });
    }
    @Get("/alluserdata")
    getAllUserData(){
        return this.userdetailService.getAllData();
    }
    @UseGuards(AuthGuard)
    @Get("user-order-details/:params")
    getOrderdetails(@Param() {params},@CurrentUser() email:string){
        return this.userdetailService.getUserOrderData(params,email);
    }
    @Post('/signin')
    async loginUser(@Body() body:loginUserDto) {
        const result = await this.AuthService.signin(body.email, body.password);
        return result;
    }

}
