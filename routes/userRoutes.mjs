import express from "express";
const router = express.Router();
import { getUsers, addUsers } from "../controllers/userController.mjs"; // Fix the import statement

router.get("/", getUsers);
router.post("/", addUsers);

// TODO :-
// supporte show, update, delete user or group of users
// 1. POST Route (add user or users)
// 2. PUT Route (update users)

export { router };
