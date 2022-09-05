import express from "express";
const router = express.Router();

import  { createEvents,deleteEvents,getEvent,updateEvents } from "../controllers/events.js";
import { verifyToken } from "../verifyToken.js";

router.post("/createevents", createEvents);
router.put("/updateevents/:id", updateEvents);
router.get("/getevents/:id", getEvent);
router.delete("/deleteents/:id" ,deleteEvents);
export default router;

// module.exports = router;






