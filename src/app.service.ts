import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import {Cache} from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly CacheManager: Cache){}
  async getHello(){
    const value:string = await this.CacheManager.get('hello');
    if(!value){
      await this.CacheManager.set('hello','HELLO This is from cache');
      return 'HELLO THIS IS NOT CACHED!!!   qwee';
    }
    return value;
  }
}
