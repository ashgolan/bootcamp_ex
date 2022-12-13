import express from "express";
import axios from "axios";
import cors from "cors";
const app = express();
const port = 5000;

app.use(cors());
app.use("/api/:city", async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://goweather.herokuapp.com/weather/${req.params.city}`
    );
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log("listen port" + port);
});
