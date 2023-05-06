import express from "express";
import cors from "cors";

import {
  // getPosts,
   createPost,
  // updatePost,
  // deletePost,
  // likePost,
} from "../../controllers/Forum/postController.js";

const router = express.Router();

//router.get("/", getPosts);
router.post("/", createPost);
// router.patch("/:id", updatePost);
// router.delete("/:id", deletePost);
// router.patch("/:id/likePost", likePost);

export default router;
