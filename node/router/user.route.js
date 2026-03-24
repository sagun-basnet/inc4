import express from "express";
import { getUser, postUser } from "../controller/user.js";

const router = express.Router();

router.get("/get-user", getUser);
router.post("/post-user", postUser);

export default router;
