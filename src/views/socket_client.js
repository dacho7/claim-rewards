const socket = io();

export const loadRewards = (callback) => {
  socket.on("loadRrewards", callback);
};

export const loadDatauser = (callback) => {
  socket.on("loadDataUser", callback);
};

export const getDataUser = (user) => {
  socket.emit("getDataUser", user);
};

export const addCredits = (user) => {
  socket.emit("addCredit", user);
};
