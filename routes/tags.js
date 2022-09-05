import express from "express";
const router = express.Router();

import  { getTags} from "../controllers/tags.js";

router.get("/getTags",getTags);
export default router;

