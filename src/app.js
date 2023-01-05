import express from "express";
import cors from "cors";
import { getTweets, getTweetsFromUser, postTweet, signUp } from "./database.js";

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/tweets", (req, res) => {
  const page = req.query.page;
  const data = getTweets(page);
  res.status(data.code).send(data.data);
});

app.get("/tweets/:username", (req, res) => {
  const page = req.query.page;
  const data = getTweetsFromUser(req.params.username, page);
  res.status(data.code).send(data.data);
});

app.post("/sign-up", (req, res) => {
  const data = signUp(req.body);
  res.status(data.code).send(data.message);
});

app.post("/tweets", (req, res) => {
  const user = req.body;
  const userHeader = req.headers.user;
  if (userHeader) user.username = userHeader;
  const data = postTweet(user);
  res.status(data.code).send(data.message);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
