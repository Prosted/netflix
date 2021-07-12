import express from "express";
import { home, upload } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/upload", upload);

export default globalRouter;
