import { getAllRewards } from "./controllers/rewardController";
import { getUser } from "./controllers/userController";

export function Sockets(io: any) {
  io.on("connection", (socket: any) => {
    // console.log(socket.handshake.url);
    const emitRewards = async () => {
      const rewards = await getAllRewards();
      io.emit("loadrewards", rewards);
    };
    emitRewards();

    //socket.emit("getDataUser", (data) => {});

    socket.on("addCredit", (user: string) => {
      getUser(user);
    });
  });
}
