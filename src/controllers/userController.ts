import { Request, Response } from "express";
import db from "../models";

export const getMainView = async (req: Request, res: Response) => {
  let username = false;

  try {
    let user = {};
    if (username) {
      const userFinded: any = await db.User.findByPk(username);
      if (userFinded) {
        user = userFinded;
      }
    }
    res.render("index", { ...user, title: "Daily rewardsss" });
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
