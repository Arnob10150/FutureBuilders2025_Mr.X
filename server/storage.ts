import { type User, type InsertUser, type HealthRecord, type InsertHealthRecord } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createHealthRecord(record: InsertHealthRecord): Promise<HealthRecord>;
  syncHealthRecords(records: InsertHealthRecord[]): Promise<number>;
}

import { db } from "./db";
import { users, healthRecords } from "@shared/schema";
import { eq } from "drizzle-orm";

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createHealthRecord(record: InsertHealthRecord): Promise<HealthRecord> {
    const [newRecord] = await db.insert(healthRecords).values(record).returning();
    return newRecord;
  }

  async syncHealthRecords(records: InsertHealthRecord[]): Promise<number> {
    if (records.length === 0) return 0;
    const result = await db.insert(healthRecords).values(records).returning();
    return result.length;
  }
}

export const storage = new DatabaseStorage();
