import { UserAttributes } from "../models/User";
import db from "../models";

export const registerCredit = async (username: string) => {
  try {
    const res = await db.User.findByPk(username);
    let registeredUser = {};
    if (res) {
      const newCredits = res.dataValues.credits;
      const latestDateReward = new Date(res.dataValues.date_reward);
      const secondLapsed =
        (new Date().getTime() - latestDateReward.getTime()) / 1000;
      if (secondLapsed >= 60) {
        await db.User.update(
          { credits: newCredits + 1, date_reward: new Date() },
          { where: { username } }
        );
      }
      const updatedUser = await db.User.findByPk(username);
      registeredUser = updatedUser.dataValues;
    } else {
      registeredUser = false;
    }
    return registeredUser;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const registerUser = async (username: string) => {
  let userCreated = {};
  try {
    const user: UserAttributes = {
      username,
      credits: 0,
      date_reward: new Date(),
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
  return user;
};

export const spendCredit = async (username: string, requireCredits: number) => {
  try {
    const res = await db.User.findByPk(username);
    if (res) {
      const credits = res.dataValues.credits;
      if (credits >= requireCredits) {
        await db.User.update(
          { credits: credits - requireCredits },
          { where: { username } }
        );
      }
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
