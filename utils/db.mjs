import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);
let db;

async function connectToMongo() {
  try {
    await client.connect();
    db = client.db("verifited_users");
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
  }
}

function getDB() {
  if (!db) throw new Error("DB not initialized");
  return db;
}

export { connectToMongo, getDB };
