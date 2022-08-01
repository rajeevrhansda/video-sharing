import express from "express";
import {
    addVideo,
    updateVideo,
    deleteVideo,
    getVideo,
    addView,
    random,
    trend,
    sub,
    getByTag,
    search
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";


const router = express.Router();

router.post("/", verifyToken, addVideo);

router.put("/:id", verifyToken, addVideo);

router.delete("/:id", verifyToken, addVideo);

router.get("/find/:id", getVideo);

router.put("/view/:id", addView);

router.get("/trend", random);

router.get("/random", trend);

router.get("/sub", verifyToken, sub);

router.get("/tags", getByTag);

router.get("/search", search);



export default router;