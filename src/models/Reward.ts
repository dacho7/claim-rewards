import { Table, Column, Model, AutoIncrement } from "sequelize-typescript";

@Table
class Reward extends Model {
  @Column
  @AutoIncrement
  id_reward!: number;

  @Column
  name!: string;

  @Column
  requirerequire_credits!: number;
}
