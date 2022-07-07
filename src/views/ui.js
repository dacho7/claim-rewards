import { loadDatauser, getDataUser, goReward } from "./socket_client.js";

const enterbutton = document.getElementById("enterUser");
const rewardsbody = document.getElementById("rewardsbody");
const rewardsButton = document.getElementById("rewardsButton");
const username = document.getElementById("username");
const totalCredits = document.getElementById("totalCredits");
const body = document.getElementById("rewardsbody");

let rewardsOptions = [];

export const renderRewards = (rewards) => {
  rewardsOptions = [];
  body.innerHTML = "";
  for (const reward of rewards) {
    body.innerHTML += `
        <div class="card">
            <div class="card-body">
              <h5 class="card-title">${reward.name}</h5>
              <div id="reward${reward.id}" class="card-text"></div>
              <a id="goReward${reward.id}" class="btn btn-primary">Go reward</a>
            </div>
          </div>
      `;
    const items = document.getElementById("reward" + reward.id);
    rewardsOptions.push(reward);
    reward.items.forEach((item) => {
      items.innerHTML += `
        <p>${item.description} ${item.percentage}%</p>
        `;
    });
  }
  setAddListenerButtons();
};

const setAddListenerButtons = () => {
  rewardsOptions.forEach((element) => {
    document
      .getElementById("goReward" + element.id)
      .addEventListener("click", () => {
        if (
          element.credits_require <= Number(totalCredits.innerHTML.split("")[0])
        ) {
          calculateReward(element.items);
          goReward(username.value, element.credits_require);
        } else {
          alert("You do not have available credits");
        }
      });
  });
  body.style.display = "";
};

const calculateReward = (items) => {
  const value = Math.random() * 100;
  let range = 0;
  items.forEach((item) => {
    if (value > range && value <= range + item.percentage) {
      alert(`You won ${item.description}`);
    }
    range += item.percentage;
  });
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
