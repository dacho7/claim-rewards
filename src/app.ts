import express from "express";
import cors from "cors";

import { router } from "./routes/index";

import db from "./models";

const app = express();

const port = process.env.PORT || 3000;

// Enable cors
app.use(cors());

// Views engine
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// All routes
app.use("/", router);

// Initialize server
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log("Runing on port", port);
  });
});
