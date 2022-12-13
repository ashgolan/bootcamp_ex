import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/task-maneger-api", () => {
  console.log("connected to server...");
});

// const tasksSchema = new mongoose.Schema({
//   description: { type: String, required: true, trim: true, uppercase: true },
//   completed: { type: Boolean, default: false },
// });

// const User = new mongoose.model("Users", usersSchema);
// const Task = new mongoose.model("Tasks", tasksSchema);

// const runApp = async () => {
//   const mongoDB = new Task({
//     description: "mongodb",
//   });
//   console.log(mongoDB);
//   await mongoDB.save();
// };

// runApp();
