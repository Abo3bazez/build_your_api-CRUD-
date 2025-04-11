import express from "express";
const router = express.Router();
import {
  getUsers,
  addUsers,
  updateUser,
  deleteUser,
} from "../controllers/userController.mjs"; // Fix the import statement

router.get("/", getUsers);
router.post("/", addUsers);
router.patch("/", updateUser);
router.delete("/", deleteUser);

export { router };
