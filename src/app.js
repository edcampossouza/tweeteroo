import express from "express";
import cors from "cors";
import { getTweets, postTweet, signUp } from "./database.js";

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/tweets", (req, res) => {
  const data = getTweets();
  res.status(data.code).send(data.data);
});

app.get("/tweets/:username", (req, res) => {
  const data = getTweets();
  res.status(200).send(data);
});

app.post("/sign-up", (req, res) => {
  const resp = signUp(req.body);
  res.status(resp.code).send(resp.message);
});

app.post("/tweets", (req, res) => {
  const data = postTweet(req.body);
  res.status(data.code).send(data.message);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
