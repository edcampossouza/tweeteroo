import express from "express";
import cors from "cors";

const PORT = 5000;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("hello Tweteroo");
});

app.listen(PORT, () => console.log(`listenint on port ${PORT}`));
