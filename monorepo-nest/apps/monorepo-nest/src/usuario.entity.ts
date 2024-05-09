import { Entity,Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Usuario{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20})
    nombre: string;

    @Column({ length: 100})
    correo: string;
}