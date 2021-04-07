import express from "express";
import {editVideos, watch, deleteVideos, upload} from "../controllers/videosController";

const videosRouter = express.Router();

//URL파라미터를 사용할 때에는 항상 순서가 중요하다.
videosRouter.get("/upload", upload);
videosRouter.get("/:id(\\d+)", watch);
videosRouter.get("/:id(\\d+)/edit", editVideos);
videosRouter.get("/:id(\\d+)/delete", deleteVideos);

export default videosRouter;