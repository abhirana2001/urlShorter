import express from "express";
import {
  getLoginPage,
  getRegisterPage,
  postLoginPage,
} from "../controller/auth.controller.js";

const router = express.Router();

router.get("/register", getRegisterPage);
router.route("/login").get(getLoginPage).post(postLoginPage);

export const authRoutes = router;
