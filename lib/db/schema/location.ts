import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const location = sqliteTable("location", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  slug: text().notNull().unique(),
  description: text(),
  image_url: text(),
  lat: real().notNull(),
  long: real().notNull(),
  createdAt: int({ mode: "timestamp" }).notNull().$default(() => Date.now()),
  updatedAt: int({ mode: "timestamp" }).notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
