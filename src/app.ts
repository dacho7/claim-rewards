import express from "express";
import cors from "cors";
import { Server as webSocket } from "socket.io";
import http from "http";

import { router } from "./routes/index";
import db from "./models";

const port = process.env.PORT || 3000;

const app = express();

// Enable cors
app.use(cors());

// Views engine
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// All routes
app.use("/", router);

// Initialize server
db.sequelize.sync().then(() => {
  const server = http.createServer(app);
  const httpServer = server.listen(port, () => {
    console.log("Runing on port", port);
  });
  const io = new webSocket(httpServer);
});
