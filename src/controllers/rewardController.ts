import { Request, Response } from "express";
import db from "../models";

export const viewCreate = (req: Request, res: Response) => {
  res.render("createReward");
};

export const rewardCreate = async (req: Request, res: Response) => {
  res.render("create");
};
