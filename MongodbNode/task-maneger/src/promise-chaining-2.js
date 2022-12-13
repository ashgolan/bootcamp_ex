import "../src/db/mongoose.js";
import { Task } from "./models/task.js";

// Task.findByIdAndDelete("639869570cd5234d938e383d")
//   .then((result) => {
//     console.log(result);
//     return Task.countDocuments({ completed: true });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const findByIdAndDelete = async () => {
  try {
    const task = await Task.findByIdAndDelete("6398d1afced6317e3570ea9f");
    const count = await Task.countDocuments({ completed: false });
    return count;
  } catch (e) {
    console.log(e);
  }
};

findByIdAndDelete();
