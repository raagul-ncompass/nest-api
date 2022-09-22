import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({name:'user_table'})
export class User {

    @PrimaryGeneratedColumn()
    Customer_ID:string;
    @Column()
    Customer_Name:string;
    @Column({type: 'bigint'})
    Contact:number;
    @Column()
    Customer_Email:string;
    @Column({type:'enum',enum: ['M','F']})
    Gender: string;
    @Column()
    Address:string;
    @Column()
    Password:string;
    @Column()
    location:string;
    
    @AfterInsert()
    logInsert() {
        console.log('Inserted User with id');
    }

    @AfterUpdate()
    logUpdate() {
        console.log('Updated User with id');
    }

    @AfterRemove()
    logRemove() {
        console.log('Removed User with id');
    }
}
