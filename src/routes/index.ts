import { registerCredit } from "./../controllers/userController";
import express from "express";

export const router = express.Router();

router.get("/", registerCredit);
