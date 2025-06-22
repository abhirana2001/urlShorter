import express from "express";
import {
  getLoginPage,
  getRegisterPage,
  postLoginData,
  postRegisterData,
  getMe,
  getLogout,
} from "../controller/auth.controller.js";

const router = express.Router();

router.route("/register").get(getRegisterPage).post(postRegisterData);
router.route("/login").get(getLoginPage).post(postLoginData);
router.route("/logout").get(getLogout);
router.route("/me").get(getMe);

export const authRoutes = router;
