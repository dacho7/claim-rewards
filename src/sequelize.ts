import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize({
  dialect: "postgres",
  dialectOptions: {
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  },
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: "localhost",
  port: 4321,
  logging: false,
  define: {
    timestamps: false,
    freezeTableName: true,
  },
  models: [__dirname + "./models"],
});
