import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize({
  dialect: "postgres",
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: 5432,
  logging: false,
  define: {
    timestamps: false,
    schema: "practice",
    freezeTableName: true,
  },
  models: [__dirname + "./models"],
});
