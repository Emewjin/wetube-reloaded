import express from "express";
import {editUser, deleteUser, seeUser, logout} from "../controllers/usersController";

const usersRouter = express.Router();

usersRouter.get("/edit", editUser);
usersRouter.get("/delete", deleteUser);
usersRouter.get(":id", seeUser);
usersRouter.get("/logout", logout);

export default usersRouter;