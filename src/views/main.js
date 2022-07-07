import { loadRewards, addCredits } from "./socket_client.js";

loadRewards();

const selectReward = document.querySelector("#selectReward");
const enterbutton = document.getElementById("enterUser");
const rewardsbody = document.getElementById("rewardsbody");
rewardsbody.style.display = "none";
const username = document.getElementById("username");
const claimCredit = document.getElementById("claimCredit");

enterbutton.addEventListener("click", () => {
  if (username.value.trim() !== "") {
    enterbutton.innerHTML = "";
    enterbutton.style.display = "none";
    enterbutton.style.visibility = "hidden";
    username.value = username.value.trim();
    username.disabled = true;
    rewardsbody.style = { opacitty: 0 };
    rewardsbody.style.display = "";
  } else {
    alert("ingrese usuario valido");
  }
});

claimCredit.addEventListener("click", (e) => {
  e.preventDefault();
  addCredits(username.value);
});
