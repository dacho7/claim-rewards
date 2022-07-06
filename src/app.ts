import express from "express";
import cors from "cors";

import { engine } from "express-handlebars";

import { router } from "./routes/index";
import db from "./models";

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use("/", router);
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log("runing on port", port);
  });
});
