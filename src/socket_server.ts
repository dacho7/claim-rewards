import { rewardCreate, getRewards } from "./controllers/RewardController";

export function Sockets(io: any) {
  io.on("connection", (socket: any) => {
    // console.log(socket.handshake.url);

    const emitRewards = async () => {
      const rewards = await getRewards();
      io.emit("loadrewards", rewards);
    };
    emitRewards();
  });
}
