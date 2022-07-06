import express from "express";
import cors from "cors";

import { router } from "./routes/index";

import db from "./models";

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use("/", router);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log("runing on port", port);
  });
});
