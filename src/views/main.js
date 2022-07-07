import { loadRewards, addCredits } from "./socket_client.js";
import { renderRewards, initialState, handleInputUser } from "./ui.js";

const enterbutton = document.getElementById("enterUser");
const claimCredit = document.getElementById("claimCredit");

initialState();
loadRewards(renderRewards);

enterbutton.addEventListener("click", handleInputUser);

claimCredit.addEventListener("click", (e) => {
  e.preventDefault();
  addCredits(username.value);
});
