import express from "express";
import cors from "cors";

import { sequelize } from "./sequelize";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log("runing on port", port);
  });
});
