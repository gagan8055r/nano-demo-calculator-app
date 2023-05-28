const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/calculator/greeting", (req, res) => {
  res.status(200).send("Hello world!");
});

app.post("/calculator/add", (req, res) => {
  const { first, second } = req.body;
  const result = first + second;
  res.status(200).json({ result });
});

app.post("/calculator/subtract", (req, res) => {
  const { first, second } = req.body;
  const result = first - second;
  res.status(200).json({ result });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
