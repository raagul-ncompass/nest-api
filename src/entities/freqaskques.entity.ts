import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'freqaskques'})
export class FreqAskQues{

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    question: string;
    @Column()
    answer: string;
    @Column()
    ques_uid: string;
    @Column()
    ans_uid: string;
}