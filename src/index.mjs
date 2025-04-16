import express from "express";
import dotenv from "dotenv";
import { connectToMongo } from "../utils/db.mjs"; // Import the MongoDB connection function
import { router } from "../routes/userRoutes.mjs";
import errorHandler from "../middleware/errorHandler.mjs";
import methodOverride from "method-override";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.use(express.static("views"));

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use method-override to handle DELETE methods
app.use(methodOverride("_method"));

// Connect to MongoDB
connectToMongo();

// Mount the router
app.use("/users", router);

app.get("/", (req, res, next) => {
  res.render("page");
});

// Fire The Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Global Error Handling
app.all("/*splat", errorHandler);
