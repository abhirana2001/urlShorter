import { eq } from "drizzle-orm";
import { db } from "../db/config.js";
import { shortCode } from "../drizzle/shortCode.schema.js";

export async function getAllLinks() {
  try {
    const res = await db.select().from(shortCode);
    return res;
  } catch (err) {
    throw err;
  }
}

export const chkShortCodeExsist = async (shorten) => {
  try {
    const res = await db
      .select()
      .from(shortCode)
      .where(eq(shortCode.shortCode, shorten));

    return res;
  } catch (err) {
    throw err;
  }
};

export const createShortCode = async (link) => {
  try {
    console.log("start");

    const res = await db.insert(shortCode).values({
      shortCode: link.shortCode,
      url: link.url,
    });

    return res;
  } catch (err) {
    throw err;
  }
};
