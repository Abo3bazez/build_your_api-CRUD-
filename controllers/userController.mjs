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

const updateUser = async (req, res, next) => {
  let { old_first_name, old_last_name, old_mail } = req.body.query;
  let { new_first_name, new_last_name, new_mail } = req.body.update;

  try {
    const user = await getDB()
      .collection("users")
      .updateOne(
        {
          first_name: old_first_name,
          last_name: old_last_name,
          mail: old_mail,
        },
        {
          $set: {
            // Use the $set operator to specify the fields to update
            first_name: new_first_name,
            last_name: new_last_name,
            mail: new_mail,
          },
        }
      );
    res.send(user);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  let { mail } = req.body;
  try {
    const user = await getDB().collection("users").deleteOne({ mail: mail });
    res.send(user);
  } catch (err) {
    next(err);
  }
};
export { getUsers, addUsers, updateUser, deleteUser };
