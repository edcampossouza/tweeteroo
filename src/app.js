import express from "express";
import cors from "cors";
import { getTweets, getTweetsFromUser, postTweet, signUp } from "./database.js";

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/tweets", (req, res) => {
  const data = getTweets();
  res.status(data.code).send(data.data);
});

app.get("/tweets/:username", (req, res) => {
  const data = getTweetsFromUser(req.params.username);
  res.status(data.code).send(data.data);
});

app.post("/sign-up", (req, res) => {
  const data = signUp(req.body);
  res.status(data.code).send(data.message);
});

app.post("/tweets", (req, res) => {
  const data = postTweet(req.body);
  res.status(data.code).send(data.message);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
