import { randomBytes } from "crypto";

// import { chkShortenLink, loadLinks, saveLink } from "../model/shorten.model.js";
import {
  chkShortCodeExsist,
  createShortCode,
  getAllLinks,
} from "../services/shorten.services.js";

export const getHomePage = async (req, res) => {
  try {
    const isLoggedIn = req.cookies;
    console.log(isLoggedIn, "cookie");

    let link = await getAllLinks();

    res.render("index", { link, host: req.host, isLoggedIn });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send(
        `<h1> internal server error <a href=" /">click me </a> for home page </h1> `
      );
  }
};

export const getRedirectLink = async (req, res) => {
  try {
    const { shorten } = req.params;
    let link = await chkShortCodeExsist(shorten);

    if (!link) {
      return res
        .status(404)
        .send(
          `<h1> shortern url is incorrect <a href="/">click me </a> for home page </h1>`
        );
    }
    return res.redirect(link[0].url);
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .send(
        `<h1> internal server error <a href="/" >click me </a> for home page </h1> `
      );
  }
};

export const postShortenLink = async (req, res) => {
  try {
    let { shortCode, url } = req.body;

    if (!url) {
      return res
        .status(400)
        .send(
          `<h1>url is not fount <a href="/">click me </a> for home page </h1>`
        );
    }

    const finalShortCode = shortCode || randomBytes(4).toString("hex");

    let link = await chkShortCodeExsist(finalShortCode);

    if (link.shortCode) {
      return res
        .status(400)
        .send(
          `<h1>shortCode already exsists  please choose another .  <a href=" /">click me </a> for home page </h1>`
        );
    }

    await createShortCode({ url, shortCode: finalShortCode });

    return res.status(200).send({ success: true, shortCode: finalShortCode });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send(
        `<h1> internal server error <a href="/">click me </a> for home page </h1> `
      );
  }
};
