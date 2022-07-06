import { Request, Response } from "express";
import db from "../models";

export const getMainView = async (req: Request, res: Response) => {
  const { username } = req.body;
  try {
    const user: any = await db.User.findByPk(username);
    if (user) {
      res.render("index", { user });
    }
  } catch (error) {
    res.render("404");
  }
};

export const registerCredit = async (req: Request, res: Response) => {
  res.render("index", { title: "Daily rewardsss" });
  //res.render("home");
  //res.send(users);
  // db.User.create({
  //   username: "davidtoo",
  //   credits: 10,
  // });
};
