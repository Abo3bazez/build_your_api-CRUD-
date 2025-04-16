import { getDB } from "../utils/db.mjs";
import { ResultFormatter } from "../utils/handleResult.mjs";
import { ObjectId } from "mongodb"; // Import ObjectId from mongodb

// TODO add global error handling [Done]
// TODO add custom search filters

// TODO class object to manage the result
// TODO class object to manage destructuring of the request body
const getUsers = async (req, res, next) => {
  try {
    const users = await getDB().collection("users").find().toArray(); // Convert cursor to array
    const countriesList = await getDB().collection("users").distinct("country");
    const countryNumber = countriesList.length;
    const usersNumber = users.length;
    res.render("users", { users, usersNumber, countryNumber }); // Send the array of users
  } catch (err) {
    next(err); // Pass the error to the error-handling middleware
  }
};

const addUsers = async (req, res, next) => {
  const { first_name, last_name, gender, age, country, mail } = req.body;

  try {
    const result = await getDB()
      .collection("users")
      .insertOne({
        first_name,
        last_name,
        gender,
        age: parseInt(age), // Ensure age is stored as a number
        country,
        mail,
      });

    res.redirect("/users"); // Redirect back to the users page after adding
  } catch (err) {
    next(err); // Pass the error to the error-handling middleware
  }
};

const updateUser = async (req, res, next) => {
  let { old_first_name, old_last_name, old_mail } = req.body.query;
  let { new_first_name, new_last_name, new_mail } = req.body.update;

  try {
    const result = await getDB()
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
    const formattedResult = new ResultFormatter(result).format();
    res.send(formattedResult);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  const userId = req.params.id; // Get the user ID from the URL

  try {
    const result = await getDB()
      .collection("users")
      .deleteOne({ _id: new ObjectId(userId) }); // Use ObjectId to match the MongoDB document ID

    if (result.deletedCount > 0) {
      res.redirect("/users"); // Redirect back to the users page after deletion
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    next(err); // Pass the error to the error-handling middleware
  }
};

export { getUsers, addUsers, updateUser, deleteUser };
