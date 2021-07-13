import express from "express";
import { profile, edit, remove } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id(\\d+)", profile);
userRouter.get("/:id(\\d+)/edit", edit);
userRouter.get("/:id(\\d+)/delete", remove);


export default userRouter;