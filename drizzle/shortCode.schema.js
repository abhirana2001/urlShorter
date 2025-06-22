import { Many, relations } from "drizzle-orm";
import { int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";

export const shortCode = mysqlTable("shortCode", {
  id: int().autoincrement().primaryKey(),
  url: varchar({ length: 255 }).notNull(),
  shortCode: varchar({ length: 20 }).notNull(),
  userId: int("user_id")
    .notNull()
    .references(() => userTable.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updateAt: timestamp("update_at").defaultNow().notNull().onUpdateNow(),
});

export const userTable = mysqlTable("user_Info", {
  id: int().autoincrement().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updateAt: timestamp("update_at").defaultNow().notNull().onUpdateNow(),
});

export const userRelation = relations(userTable, ({ many }) => ({
  shortLink: many(shortCode),
}));

export const shortCodeRelation = relations(shortCode, ({ one }) => ({
  user: one(userTable, {
    fields: [userTable.id],
    references: [shortCode.userId],
  }),
}));
