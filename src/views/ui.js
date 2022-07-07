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
