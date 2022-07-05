import { Table, Column, Model, HasMany } from "sequelize-typescript";

@Table
class Item extends Model {
  @Column
  description!: string;

  @Column
  percentage!: number;
}
