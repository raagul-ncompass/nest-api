import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FreqAskQues } from 'src/entities/freqaskques.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FreqAskQuesService {
    constructor(@InjectRepository(FreqAskQues) private faqRepo:Repository<FreqAskQues>){}
    getAnswer(ques:string){
        ques = '%' + ques + '%';
        return this.faqRepo.createQueryBuilder('freqaskques')
        .select('answer')
        .where("question like :ques",{ques:ques})
        .getRawOne();
    }
    createQues(ques:string,id){
        return this.faqRepo.createQueryBuilder()
        .insert()
        .into('freqaskques')
        .values([{question: ques,answer:"answer not found",ques_uid: id}])
        .execute()
    }
    createAnswer(body,id){
        return this.faqRepo.createQueryBuilder()
        .update('freqaskques')
        .set({answer:body.answer,ans_uid: id})
        .where("question = :ques",{ques:body.ques})
        .execute()
    }
}
