import express from "express";
import userRouter from "./router/user.route.js";
import cors from "cors";
const port = 5555;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRouter); //localhost/add-user

app.listen(port, () => {
  console.log(`Server is started at http://localhost:${port}`);
});
