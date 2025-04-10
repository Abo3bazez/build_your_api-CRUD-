import { getDB } from "../utils/db.mjs";

const getUsers = async (req, res, next) => {
  try {
    const users = await getDB().collection("users").find().toArray(); // Convert cursor to array
    res.send(users); // Send the array of users
  } catch (err) {
    next(err); // Pass the error to the error-handling middleware
  }
};

export { getUsers };
