import express from "express";
import { indexRoute } from "./routes/index.router.js";
const app = express();
const PORT = "5000";

app.use(express.json());

app.use("/api", indexRoute);

app.listen(PORT, () => {
  console.log("Listining to port 5000");
});
