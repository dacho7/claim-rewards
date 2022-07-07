import express from "express";
import cors from "cors";
import { Server as webSocket } from "socket.io";
import http from "http";

import { Sockets } from "./socket_server";
import db from "./models";

const port = process.env.PORT || 3000;

const app = express();

// Enable cors
app.use(cors());

// Views
app.use(express.static(__dirname + "/views"));

// Initialize server with webSockets
db.sequelize.sync().then(() => {
  const server = http.createServer(app);
  const httpServer = server.listen(port, () => {
    console.log("Runing on port", port);
  });
  const io = new webSocket(httpServer);
  Sockets(io);
});
