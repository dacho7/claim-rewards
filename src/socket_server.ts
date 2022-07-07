import { getAllRewards } from "./controllers/rewardController";
import { getUser, registerCredit } from "./controllers/userController";

export function Sockets(io: any) {
  io.on("connection", (socket: any) => {
    // console.log(socket.handshake.url);
    const emitRewards = async () => {
      const rewards = await getAllRewards();
      io.emit("loadRrewards", rewards);
    };

    emitRewards();

    const getDataUser = async (user: string) => {
      const dataUser = await getUser(user);
      io.emit("loadDataUser", dataUser);
    };

    socket.on("getDataUser", getDataUser);

    socket.on("addCredit", async (user: string) => {
      await registerCredit(user);
      await getDataUser(user);
    });
  });
}
