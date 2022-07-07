import { UserAttributes } from "../models/User";
import db from "../models";

export const registerCredit = async (username: string) => {
  try {
    const res = await db.User.findByPk(username);
    let registeredUser = {};
    if (res) {
      const newCredits = res.dataValues.credits;
      await db.User.update(
        { credits: newCredits + 1 },
        { where: { username } }
      );
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
