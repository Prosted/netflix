import express from "express";
import { watch, getUpload, edit, remove, postUpload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.get("/:id([0-9a-f]{24})/edit", edit);
videoRouter.get("/:id([0-9a-f]{24})/delete", remove);

export default videoRouter;