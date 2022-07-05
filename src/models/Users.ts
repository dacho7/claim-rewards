import { Table, Column, Model, HasMany } from "sequelize-typescript";

@Table
class Person extends Model {
  @Column
  username!: string;

  @Column
  credits!: number;
}
