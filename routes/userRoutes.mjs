import express from "express";
const router = express.Router();
import {
  getUsers,
  addUsers,
  updateUser,
} from "../controllers/userController.mjs"; // Fix the import statement

router.get("/", getUsers);
router.post("/", addUsers);
router.patch("/", updateUser);
// TODO :-
// supporte show, update, delete user or group of users
// 1. POST Route (add user or users)
// 2. patch Route (update users)

export { router };
