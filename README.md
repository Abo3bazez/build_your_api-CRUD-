# CRUD Backend Documentation

This project is a simple CRUD (Create, Read, Update, Delete) backend built with Node.js, Express, and MongoDB. Below are the steps and tasks completed to set up and implement the backend logic.

---

## ✅ **Task 1: Setup the Project**

1. **Initialize the Project**:

   - Run `npm init` to create a `package.json` file.
   - Install the required dependencies:
     ```bash
     npm install express mongodb dotenv
     ```
   - Install development dependencies:
     ```bash
     npm install --save-dev nodemon
     ```

2. **Folder Structure**:

   - Create the following folder structure:
     ```
     controllers/
     middleware/
     routes/
     utils/
     ```

3. **Setup `.gitignore`**:
   - Create a `.gitignore` file and add:
     ```
     node_modules
     .env
     ```

---

## ✅ **Task 2: Connect MongoDB**

1. **Database Connection**:
   - Create a `db.js` file in the `utils/` folder.
   - Use the `mongodb` package to connect to MongoDB using the URI stored in the `.env` file.
   - Log a success message when the connection is established.

---

## ✅ **Task 3: Create Your First Route**

1. **GET `/api/users`**:
   - Create a route to fetch all users from the MongoDB database.
   - Test the route using Postman or a browser to ensure it works correctly.

---

## ✅ **Task 4: Add a POST Route**

1. **POST `/api/users`**:
   - Create a route to add a new user to the database.
   - Validate that both `name` and `email` fields are provided in the request body.
   - Return the inserted document or its `insertedId` upon success.

---

## ✅ **Task 5: Add Basic Error Handling**

1. **Error Middleware**:
   - Create a custom error-handling middleware in `middleware/errorHandler.js`.
   - Use `try/catch` blocks in all controller functions.
   - Pass errors to `next(err)` and handle them in the middleware.

---

## ✅ **Task 6: Add an Update Route**

1. **PUT `/api/users/:id`**:
   - Create a route to update a user's `name` and/or `email` by their ID.
   - Use MongoDB's `ObjectId` for user lookup.

---

## ✅ **Task 7: Add a Delete Route**

1. **DELETE `/api/users/:id`**:
   - Create a route to delete a user by their ID.
   - Return a success message like `{ success: true }` upon successful deletion.

---

## ✅ **Task 8: Practice with Error Scenarios**

1. **Error Scenarios**:
   - Test the application for the following scenarios:
     - Invalid user ID.
     - Missing required fields.
     - Database connection issues.
   - Ensure the custom error handler catches and responds to these errors cleanly.

---

## ✅ **Optional Bonus**

1. **Additional Features**:
   - Add logging for all incoming requests using `console.log`.
   - Create a `GET /api/users/:id` route to fetch a single user by their ID.
   - Implement pagination for the `GET /api/users` route using query parameters like `?page=1&limit=10`.

---

## **How to Run the Project**

1. **Start the Development Server**:

   - Use the following command to start the server with `nodemon`:
     ```bash
     npm run start:dev
     ```

2. **Environment Variables**:

   - Ensure the `.env` file contains the MongoDB connection URI:
     ```
     MONGO_URI=your_mongodb_connection_string
     ```

3. **Testing**:
   - Use Postman or a browser to test the API endpoints.

---

This documentation provides a step-by-step guide to building and testing the CRUD backend. Follow the tasks to implement the required functionality and extend it with optional features for additional practice.
