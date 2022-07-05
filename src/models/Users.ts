import { Table, Column, Model, HasMany } from "sequelize-typescript";

@Table
class User extends Model {
  @Column({ primaryKey: true })
  username!: string;

  @Column
  credits!: number;
}
