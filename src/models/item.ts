"use strict";

import { Model } from "sequelize";

export interface ItemAttributes {
  id: number | null;
  id_reward: number;
  description: string;
  percentage: number;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Item extends Model<ItemAttributes> implements ItemAttributes {
    id!: number;
    id_reward!: number;
    description!: string;
    percentage!: number;
    static associate(models: any) {
      // define association here
    }
  }
  Item.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_reward: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      percentage: {
        type: DataTypes.REAL,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
