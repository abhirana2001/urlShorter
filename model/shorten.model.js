import prisma from "../db/config.js";

export const saveLink = async (links) => {
  try {
    console.log(links);

    await prisma.shortLink.create({
      data: links,
    });
  } catch (err) {
    console.log(err);

    throw err;
  }
};

export const loadLinks = async () => {
  try {
    let data = await prisma.shortLink.findMany();
    console.log(data);

    return data;
  } catch (err) {
    throw err;
  }
};

export const chkShortenLink = async (shorten) => {
  try {
    const findShortenLink = await prisma.shortLink.findUnique({
      where: { shortCode: shorten },
    });
    console.log(findShortenLink);

    return findShortenLink;
  } catch (err) {
    throw err;
  }
};

chkShortenLink("jionoi");
