import { loadDatauser, getDataUser } from "./socket_client.js";

const enterbutton = document.getElementById("enterUser");
const rewardsbody = document.getElementById("rewardsbody");
const rewardsButton = document.getElementById("rewardsButton");
const username = document.getElementById("username");
const totalCredits = document.getElementById("totalCredits");

export const renderRewards = (rewards) => {
  const rewardsbody = document.getElementById("rewardsbody");
  renderRewards.innerHTML = "";
  console.log(rewards);
  rewards.forEach((reward) => {
    rewardsbody.innerHTML += `
        <div class="card">
            <div class="card-body">
              <h5 class="card-title">${reward.name}</h5>
              <div id="reward${reward.id}" class="card-text"></div>
              <a href="#" class="btn btn-primary">Go reward</a>
            </div>
          </div>
      `;
    const items = document.getElementById("reward" + reward.id);
    reward.items.forEach((item) => {
      items.innerHTML += `
        <p>${item.description} ${item.percentage}%</p>
        `;
    });
  });
  rewardsbody.style.display = "";
};

export const initialState = () => {
  rewardsbody.style.display = "none";
  rewardsButton.style.display = "none";
};

export const handleInputUser = () => {
  if (username.value.trim() !== "") {
    enterbutton.innerHTML = "";
    enterbutton.style.display = "none";
    enterbutton.style.visibility = "hidden";
    username.value = username.value.trim();
    username.disabled = true;
    rewardsbody.style.display = "";
    rewardsButton.style.display = "";
    getDataUser(username.value);
    loadDatauser(setDataUser);
  } else {
    alert("ingrese usuario valido");
  }
};

export const setDataUser = (data) => {
  totalCredits.innerHTML = `${data.credits} Creditos`;
};
