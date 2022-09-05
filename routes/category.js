import express from "express";
const router = express.Router();

import  {getCategories } from "../controllers/category.js";

router.get("/getcategories",getCategories);
export default router;

// module.exports = router;
