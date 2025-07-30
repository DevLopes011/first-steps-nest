import { IsStrongPassword } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string

    @Column({nullable: false, unique: true})
    cpf: string

    @Column()
    phoneNumber: string
 
    @Column()
    email: string

    @Column()
    password: string

    @Column()
    dob: Date

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;


    
}
