import { rewardCreate, getAllRewards } from "./controllers/rewardController";

export function Sockets(io: any) {
  io.on("connection", (socket: any) => {
    // console.log(socket.handshake.url);

    const emitRewards = async () => {
      const rewards = await getAllRewards();
      io.emit("loadrewards", rewards);
    };
    emitRewards();
  });
}
