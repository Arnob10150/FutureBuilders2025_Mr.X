import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const healthRecords = pgTable("health_records", {
  id: serial("id").primaryKey(),
  userId: integer("user_id"), // Optional, for anonymous sync
  symptoms: text("symptoms").notNull(),
  diagnosis: jsonb("diagnosis").notNull(), // Store the result JSON
  severity: text("severity"),
  timestamp: timestamp("timestamp").defaultNow(),
  synced: boolean("synced").default(false),
});

export const insertUserSchema = createInsertSchema(users);
export const insertHealthRecordSchema = createInsertSchema(healthRecords);

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type HealthRecord = typeof healthRecords.$inferSelect;
export type InsertHealthRecord = z.infer<typeof insertHealthRecordSchema>;
