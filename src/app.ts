import express from "express";
import cors from "cors";

//import { sequelize } from "./sequelize";

import { router } from "./routes/index";
import db from "./models";

const app = express();

app.use("/", router);
const port = process.env.PORT || 3000;

app.use(cors());

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log("runing on port", port);
  });
});
