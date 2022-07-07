import { getAllRewards } from "./controllers/rewardController";
import {
  getUser,
  registerCredit,
  spendCredit,
} from "./controllers/userController";

export function Sockets(io: any) {
  io.on("connection", (socket: any) => {
    const emitRewards = async () => {
      const rewards = await getAllRewards();
      io.emit("loadRrewards", rewards);
    };

    const getDataUser = async (user: string) => {
      const dataUser = await getUser(user);
      emitRewards();
      socket.emit("loadDataUser", dataUser);
    };

    const goReward = async (user: string) => {
      await spendCredit(user);
      await getDataUser(user);
    };

    socket.on("getDataUser", getDataUser);

    socket.on("addCredit", async (user: string) => {
      await registerCredit(user);
      await getDataUser(user);
    });

    socket.on("goReward", goReward);
  });
}
