import { getBook } from "../controller/book.controler.js";
import express from "express";

const router=express.Router();

router.get('/book',getBook)

export default router