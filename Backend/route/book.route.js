import { getBook,getFreeBook } from "../controller/book.controler.js";
import express from "express";
import { fetchUser } from "../middleware/auth.middleware.js";
const router=express.Router();

router.get('/freebook',getFreeBook)
router.get('/book',fetchUser,getBook)
export default router