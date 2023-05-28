const express = require('express');
const app = express();
const port = 8080;

class Result {
  constructor(result) {
    this.result = result;
  }
}

app.use(express.json());

app.get('/calculator/greeting', (req, res) => {
  res.send('Hello world!');
});

app.post('/calculator/add', (req, res) => {
  const { first, second } = req.body;
  const response = new Result(first + second);
  res.json(response);
});

app.post('/calculator/subtract', (req, res) => {
  const { first, second } = req.body;
  const response = new Result(first - second);
  res.json(response);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
