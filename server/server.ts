import "dotenv/config";

import express, { Express } from "express";

const app: Express = express();
const port = process.env.PORT || 3000;

//middleware
app.use();

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
