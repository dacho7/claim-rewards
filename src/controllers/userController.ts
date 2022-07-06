import { Request, Response } from "express";
import db from "../models";

export const registerCredit = (req: Request, res: Response) => {
  db.User.save({ username: "tobar", credits: 0 })
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(err);
    });
};
