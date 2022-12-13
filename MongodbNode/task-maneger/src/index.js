import express from "express";
import "./db/mongoose.js";
import { productRouter } from "./router/product.js";
import { tasksRouter } from "./router/tasks.js";
import { userRouter } from "./router/user.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", userRouter);
app.use("/tasks", tasksRouter);
app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log("listen to port:", PORT);
});
