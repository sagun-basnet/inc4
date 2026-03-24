import express, { json } from "express";
import userRouter from "./router/user.route.js";
const port = 5555;
const app = express();

app.use(json());

app.use("/", userRouter);

app.listen(port, () => {
  console.log(`Server is started at http://localhost:${port}`);
});
