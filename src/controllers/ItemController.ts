import { ItemAttributes } from "./../models/Item";
import db from "../models";

export const createItem = async (
  description: string,
  id_reward: number,
  percentage: number
) => {
  const newItem: ItemAttributes = {
    id: null,
    description,
    id_reward,
    percentage,
  };
  try {
    const item = await db.Item.save(newItem);
    return item.dataValues;
  } catch (error) {
    console.log(error);
  }
};
