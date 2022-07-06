import express from "express";

import { registerCredit, getMainView } from "../controllers/userController";
import { getViewCreate } from "../controllers/rewardController";

export const router = express.Router();

// User controller
router.get("/", getMainView);

// Reward controller
router.get("/viewCreate", getViewCreate);

//about route
router.get("/about", (req, res) => {
  res.render("about");
});

//404 page
router.use((req, res) => {
  res.status(404).render("404");
});
