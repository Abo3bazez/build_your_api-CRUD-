import express from "express";
import dotenv from "dotenv";
import { connectToMongo } from "./utils/db.mjs"; // Import the MongoDB connection function
import { router } from "./routes/userRoutes.mjs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectToMongo();

// Mount the router
app.use("/api/users", router);

// Fire The Server
app.listen(PORT, () => {
  console.log(`Connection Setup on http://localhost:${PORT}`);
});
