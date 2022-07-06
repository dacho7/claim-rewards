import { ItemAttributes } from "./../models/Item";
import { Request, Response } from "express";
import db from "../models";

export const createItem = async (req: Request, res: Response) => {
  const newItem: ItemAttributes = {
    id: null,
    description: req.body.description,
    id_reward: req.body.id_reward,
    percentage: req.body.percentage,
  };
  try {
    const item = await db.Item.save(newItem);
    res.send({ ok: true, data: item });
  } catch (error) {
    res.status(400).send({ ok: false, err: "something wrong" });
  }
};
