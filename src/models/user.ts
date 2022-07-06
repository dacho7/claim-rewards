"use strict";

import { Model } from "sequelize";

interface UserAttributes {
  username: string;
  credits: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    username!: string;
    credits!: number;
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
        type: DataTypes.NUMBER,
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
