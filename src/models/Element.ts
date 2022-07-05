import { Table, Column, Model, AutoIncrement } from "sequelize-typescript";

@Table
class Item extends Model {
  @AutoIncrement
  @Column
  id_element!: number;

  @Column
  id_reward!: number;

  @Column
  description!: string;

  @Column
  percentage!: number;
}
