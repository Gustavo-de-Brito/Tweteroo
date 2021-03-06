import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
  const user = req.body;

  users.push(user);

  res.send("OK");
});

app.post("/tweets", (req, res) => {
  const tweet = req.body;
  const { avatar } = users.find( user => user.username === tweet.username);

  tweets.push({ ...tweet, avatar });

  res.send("OK");
});

app.get("/tweets", (req, res) => {
  const lastTweets = [];

  for(let i = (tweets.length - 1); i >= 0; i--) {
    lastTweets.push(tweets[i]);

    if(lastTweets.length === 10) {
      break;
    }
  }

  res.send(lastTweets);
});

app.listen(5000);