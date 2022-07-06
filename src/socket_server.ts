export function Sockets(io: any) {
  io.on("connection", (socket: any) => {
    // console.log(socket.handshake.url);
    console.log("nuevo socket connectado:", socket.id);
  });
}
