import express from "express";
import {
  savePostToDB,
  getAll,
  getPostWithID,
  deleteFromDBWithID,
  update,
} from "../3 routeHelper/postRouteHelper.js";

const router = express.Router();

/* Routes */
// GET
router.get("/", getAll);
router.get("/:postID", getPostWithID);

//POST
router.post("/", savePostToDB);

//DELETE
router.delete("/:postID", deleteFromDBWithID);

//PATCH
router.patch("/:postID", update);

export { router as postsRouter };
