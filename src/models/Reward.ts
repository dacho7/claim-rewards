import { Table, Column, Model, HasMany } from "sequelize-typescript";

@Table
class Reward extends Model {
  @Column
  name!: string;

  @Column
  requirerequire_credits!: number;
}
