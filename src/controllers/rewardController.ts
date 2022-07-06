import { Request, Response } from "express";

import { RewardAttributes } from "../models/Reward";

import db from "../models";

export const getViewCreate = (req: Request, res: Response) => {
  res.render("createReward");
};

export const rewardCreate = async (req: Request, res: Response) => {
  const newReward: RewardAttributes = {
    id: null,
    name: req.params.name,
    credits_require: Number(req.params.credits),
  };
  try {
    const res = await db.Reward.save(newReward);
    res.send({ ok: true, data: res });
  } catch (error) {
    res.status(400).send({ ok: false, err: "something wrong" });
  }
};
