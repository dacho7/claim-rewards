import { Request, Response } from "express";
import db from "../models";

export const registerCredit = async (req: Request, res: Response) => {
  const users: any = await db.User.findAll();
  res.render("index");
  //res.render("home");
  //res.send(users);
  // db.User.create({
  //   username: "davidtoo",
  //   credits: 10,
  // });
};
