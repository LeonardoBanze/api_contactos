import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('contacts')
export class Contact {

    @PrimaryGeneratedColumn()
    id : number

    @Column({type:'text'})
    name : string
    @Column({type:'text'})
    phone: string

}