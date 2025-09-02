import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({})
export class Dependent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ type: 'date' })
  createdAt: Date;

  @Column({ type: 'date' })
  birthDate: Date;

  @Column({ type: 'int' })
  age: number;

  @Column({ default: false })
  newBorn: boolean;

  @Column({ length: 50 })
  gender: string;
}
