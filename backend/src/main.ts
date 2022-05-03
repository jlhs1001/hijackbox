import express from "express";

const app = express();
const port = 3001;

app.get('/', (_, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
