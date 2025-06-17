import { randomBytes } from "crypto";

import { chkShortenLink, loadLinks, saveLink } from "../model/shorten.model.js";

export const getHomePage = async (req, res) => {
  try {
    let link = await loadLinks();

    res.render("index", { link, host: req.host });
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
    let link = await chkShortenLink(shorten);

    if (!link) {
      return res
        .status(404)
        .send(
          `<h1> shortern url is incorrect <a href="/">click me </a> for home page </h1>`
        );
    }
    return res.redirect(link.url);
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

    console.log(req.body);

    if (!url) {
      return res
        .status(400)
        .send(
          `<h1>url is not fount <a href="/">click me </a> for home page </h1>`
        );
    }

    const finalShortCode = shortCode || randomBytes(4).toString("hex");
    let link = await chkShortenLink(finalShortCode);

    if (link) {
      return res
        .status(400)
        .send(
          `<h1>shortCode already exsists  please choose another .  <a href=" /">click me </a> for home page </h1>`
        );
    }

    await saveLink({ url, shortCode: finalShortCode });

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
