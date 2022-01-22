import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello, world!");
});

export default app;
