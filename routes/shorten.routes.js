import express from "express";

import {
  getHomePage,
  getRedirectLink,
  postShortenLink,
} from "../controller/shorten.controller.js";

let router = express.Router();

router.get("/", getHomePage);
router.get("/:shorten", getRedirectLink);
router.post("/shorten", postShortenLink);

export const shortenRoute = router;
