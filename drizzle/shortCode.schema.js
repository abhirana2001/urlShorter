import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const shortCode = mysqlTable("shortCode", {
  id: int().autoincrement().primaryKey(),
  url: varchar({ length: 255 }).notNull(),
  shortCode: varchar({ length: 20 }).notNull(),
});
