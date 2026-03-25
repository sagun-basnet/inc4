import express from "express";
import { addUser, selectUser } from "../controller/user.js";

const route = express.Router();

route.post("/add-user", addUser);
route.get("/select-user", selectUser);

export default route;
