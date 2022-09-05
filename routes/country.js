import express from "express";
const router = express.Router();

import  {getcountries } from "../controllers/Country.js";

router.get("/getcountries",getcountries);
export default router;

// module.exports = router;
