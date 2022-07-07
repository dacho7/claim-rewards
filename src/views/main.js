import {
  loadRewards,
  getDataUser,
  loadDatauser,
  addCredits,
} from "./socket_client.js";
import { renderRewards } from "./ui.js";

loadRewards(renderRewards);

const enterbutton = document.getElementById("enterUser");
const rewardsbody = document.getElementById("rewardsbody");
const rewardsButton = document.getElementById("rewardsButton");
const username = document.getElementById("username");
const claimCredit = document.getElementById("claimCredit");

rewardsbody.style.display = "none";
rewardsButton.style.display = "none";

enterbutton.addEventListener("click", () => {
  if (username.value.trim() !== "") {
    enterbutton.innerHTML = "";
    enterbutton.style.display = "none";
    enterbutton.style.visibility = "hidden";
    username.value = username.value.trim();
    username.disabled = true;
    rewardsbody.style.display = "";
    rewardsButton.style.display = "";
    loadRewards(renderRewards);
    getDataUser(username.value);
    loadDatauser();
  } else {
    alert("ingrese usuario valido");
  }
});

claimCredit.addEventListener("click", (e) => {
  e.preventDefault();
  addCredits(username.value);
});
