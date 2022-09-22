import { CacheModule, Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductDetailsModule } from './product-details/product-details.module';
import { UserDetailsModule } from './user-details/user-details.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DeliveryDateModule } from './delivery-date/delivery-date.module';
import { FreqAskQuesModule } from './freq-ask-ques/freq-ask-ques.module';
import { WarrantyReturnModule } from './warranty-return/warranty-return.module';
import * as redisStore from 'cache-manager-redis-store';


@Module({
  imports: [ 
    UserDetailsModule,
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    OrderDetailsModule,
    ProductDetailsModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
        useFactory: (config: ConfigService) => {
          return{
            type: 'mysql',
            database: config.get<string>('DB'),
            host: config.get<string>('HOST'),
            port: config.get<number>('PORT'),
            username: config.get<string>('USER'),
            password: config.get<string>('PASSWORD'),
            entities: ["./**/*.entity.js"],
            synchronize: false
          };
        }
      }),
    CacheModule.register({
      store:redisStore,
      isGlobal: true,
      ttl:30
    }),
    DeliveryDateModule,
    FreqAskQuesModule,
    WarrantyReturnModule,
  ],
  controllers: [AppController],
  providers: [AppService,
    {
    provide:APP_PIPE,
    useValue:new ValidationPipe({
      whitelist: true,
    })
    },
  ],
})

export class AppModule{}