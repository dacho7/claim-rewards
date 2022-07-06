"use strict";

import { Model } from "sequelize";

export interface RewardAttributes {
  id: number | null;
  name: string;
  credits_require: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Reward extends Model<RewardAttributes> implements RewardAttributes {
    id!: number;
    name!: string;
    credits_require!: number;
    static associate(models: any) {
      // define association here
    }
  }
  Reward.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      credits_require: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      sequelize,
      modelName: "Reward",
    }
  );
  return Reward;
};
