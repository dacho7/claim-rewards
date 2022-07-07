"use strict";

import { userInfo } from "os";
import { Model } from "sequelize";

export interface UserAttributes {
  username: string;
  credits: number;
  date_reward: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    username!: string;
    credits!: number;
    date_reward!: Date;
    static associate(models: any) {
      // define association here
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      credits: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date_reward: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
