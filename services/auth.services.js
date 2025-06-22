import { and, eq } from "drizzle-orm";
import { db } from "../db/config.js";
import { userTable } from "../drizzle/shortCode.schema.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export const findUserByEmail = async (email) => {
  try {
    const [user] = await db
      .select()
      .from(userTable)
      .where(eq(userTable.email, email));

    return user;
  } catch (err) {
    throw err;
  }
};

export const createUser = async ({ name, email, password }) => {
  try {
    const [userId] = await db
      .insert(userTable)
      .values({ name, email, password })
      .$returningId();

    return userId;
  } catch (err) {
    throw err;
  }
};

export const hashPassword = async (password) => {
  try {
    return await argon2.hash(password);
  } catch (err) {
    throw err;
  }
};

export const verifyPassword = (hashedPassword, password) => {
  try {
    return argon2.verify(hashedPassword, password);
  } catch (err) {
    throw err;
  }
};

export const generateToken = ({ id, name, email }) => {
  return jwt.sign({ id, name, email }, process.env.SECRET, {
    expiresIn: "1h",
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET);
};
