import express from "express";
const router = express.Router();
import {
  getUsers,
  addUsers,
  deleteUser,
} from "../controllers/userController.mjs";

router.get("/", getUsers);
router.post("/", addUsers);
router.delete("/:id", deleteUser);

export { router };
