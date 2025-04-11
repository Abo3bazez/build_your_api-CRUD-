import { getDB } from "../utils/db.mjs";

const getUsers = async (req, res, next) => {
  try {
    const users = await getDB().collection("users").find().toArray(); // Convert cursor to array
    res.send(users); // Send the array of users
  } catch (err) {
    next(err); // Pass the error to the error-handling middleware
  }
};

const addUsers = async (req, res, next) => {
  let { first_name, last_name, age, country, mail, gender } = req.body;
  try {
    const user = await getDB().collection("users").insertOne({
      first_name: first_name,
      last_name: last_name,
      mail: mail,
      gender: gender,
      country: country,
      age: age,
    });
    res.send(user);
  } catch (err) {
    next(err);
  }
};

export { getUsers, addUsers };
