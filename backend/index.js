require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

// Basic test route
app.get("/", (req, res) => {
  res.send("🌱 GreenRoot backend running successfully!");
});

// Example: verify Prisma connection
app.get("/api/test", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
);
