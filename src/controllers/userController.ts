import { UserAttributes } from "../models/User";
import db from "../models";

export const registerCredit = async (username: string) => {
  const user: any = await db.User.findByPk(username);
  if (user) {
    console.log(user);
  } else {
    console.log("not exist");
  }
  //await db.User.update({ where });
  //res.render("home");
  //res.send(users);
  // db.User.create({
  //   username: "davidtoo",
  //   credits: 10,
  // });
  //return user;
};

export const registerUser = async (username: string) => {
  let userCreated = {};
  try {
    const user: UserAttributes = {
      username,
      credits: 0,
    };
    const res: any = await db.User.create(user);
    userCreated = res.dataValues;
  } catch (error) {
    console.log(error);
  }
  return userCreated;
};

export const isUserExist = async (username: string) => {
  let userFinded = {};
  try {
    const user: any = await db.User.findByPk(username);
    if (user) {
      userFinded = user;
    }
  } catch (error) {
    console.log(error);
  }
  return userFinded;
};

export const getUser = async (username: string) => {
  let user = {};
  const resultUserFinded: any = await isUserExist(username);
  if (Object.values(resultUserFinded).length !== 0) {
    user = resultUserFinded.dataValues;
  } else {
    user = await registerUser(username);
  }
  console.log(user);
  return user;
};
