import express from "express";
import {
  addUser,
  deleteUser,
  editUser,
  login,
  selectSingleUser,
  selectUser,
  uploadFile,
} from "../controller/user.js";
import { verifyToken, isAdmin } from "../middleware/isAuth.js";
import upload from "../middleware/multerConfig.js";

const route = express.Router();

route.post("/add-user", upload.single("profile"), addUser);
route.get("/select-user", selectUser);
route.get("/select-single-user/:id", verifyToken, selectSingleUser);
route.delete("/delete-user/:id", verifyToken, isAdmin, deleteUser);
route.put("/edit-user/:id", verifyToken, isAdmin, editUser);
route.post("/login", login);
route.post("/upload-image", upload.array("image", 5), uploadFile);
export default route;
