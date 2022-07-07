import { RewardAttributes } from "../models/Reward";

import db from "../models";
import { RewardView } from "./interfaces/RewardView";
import { ItemAttributes } from "../models/Item";

export const rewardCreate = async (name: string, credits: number) => {
  const newReward: RewardAttributes = {
    id: null,
    name,
    credits_require: credits,
  };
  try {
    const res = await db.Reward.save(newReward);
    return res;
  } catch (error) {
    return false;
  }
};

export const getAllRewards = async () => {
  try {
    const allRewards: RewardView[] = [];

    const rewardsResponse: any = await db.Reward.findAll();

    for (const reward of rewardsResponse) {
      const { dataValues } = reward;
      const objReward: RewardView = {
        id: dataValues.id,
        name: dataValues.name,
        credits_require: dataValues.credits_require,
        items: [],
      };

      const itemsResponse: any = await db.Item.findAll({
        where: { id_reward: dataValues.id },
      });

      const itemsRewards: ItemAttributes[] = [];

      for (const item of itemsResponse) {
        const { dataValues } = item;
        const newItem: ItemAttributes = {
          description: dataValues.description,
          id: dataValues.id,
          id_reward: dataValues.id_reward,
          percentage: dataValues.percentage,
        };

        itemsRewards.push(newItem);
      }

      objReward.items = itemsRewards;
      allRewards.push(objReward);
    }
    return allRewards;
  } catch (error) {
    return [];
  }
};
