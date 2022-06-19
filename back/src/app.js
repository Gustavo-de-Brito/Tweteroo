import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let user;

app.post("/sign-up", (req, res) => {
  user = req.body;
});

app.listen(5000);