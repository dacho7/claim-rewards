const socket = io();
socket.on("loadrewards", (rewards) => {
  console.log(rewards);
});

const selectReward = document.querySelector("#selectReward");
selectReward.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(selectReward["title"].value);
});
