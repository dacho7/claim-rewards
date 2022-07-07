const socket = io();

export const userData = () => {
  socket.on("getDataUser", (data) => {
    console.log(data);
  });
};

export const loadRewards = () => {
  socket.on("loadrewards", (rewards) => {
    console.log(rewards);
  });
};

export const addCredits = (user) => {
  socket.emit("addCredit", user);
};
