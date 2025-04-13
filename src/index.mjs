import express from "express";
import dotenv from "dotenv";
import { connectToMongo } from "../utils/db.mjs"; // Import the MongoDB connection function
import { router } from "../routes/userRoutes.mjs";
import errorHandler from "../middleware/errorHandler.mjs";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.use(express.static("views"));

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectToMongo();

// Mount the router
app.use("/users", router);

app.get("/", (req, res, next) => {
  res.render("page");
});

// Fire The Server
app.listen(PORT, () => {
  console.log(`Connection Setup on http://localhost:${PORT}`);
});

// Global Error Handling
app.all("/*splat", errorHandler);
