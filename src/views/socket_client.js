const socket = io();

export const loadRewards = (callback) => {
  socket.on("loadRrewards", callback);
};

export const loadDatauser = () => {
  socket.on("loadDataUser", (data) => {
    console.log(data);
  });
};

export const getDataUser = (user) => {
  socket.emit("getDataUser", user);
};

export const addCredits = (user) => {
  socket.emit("addCredit", user);
};
