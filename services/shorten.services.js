import { eq } from "drizzle-orm";
import { db } from "../db/config.js";
import { shortCode } from "../drizzle/shortCode.schema.js";

export async function getAllLinks({ id }) {
  try {
    const res = await db
      .select()
      .from(shortCode)
      .where(eq(shortCode.userId, id));
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
      userId: link.id,
    });

    return res;
  } catch (err) {
    throw err;
  }
};
