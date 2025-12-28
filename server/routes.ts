import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.healthRecords.create.path, async (req, res) => {
    try {
      const input = api.healthRecords.create.input.parse(req.body);
      const record = await storage.createHealthRecord(input);
      res.status(201).json(record);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.post(api.healthRecords.sync.path, async (req, res) => {
      try {
          const input = api.healthRecords.sync.input.parse(req.body);
          const count = await storage.syncHealthRecords(input);
          res.json({ synced: count });
      } catch (err) {
          if (err instanceof z.ZodError) {
            return res.status(400).json({
                message: err.errors[0].message,
                field: err.errors[0].path.join('.'),
            });
          }
          throw err;
      }
  });

  return httpServer;
}
