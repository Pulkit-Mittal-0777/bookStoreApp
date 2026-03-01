import express from 'express'
import { signup,login,logout,me } from '../controller/user.controller.js';
import { fetchUser } from '../middleware/auth.middleware.js';
const router =express.Router();

router.post('/signup',signup)
router.post('/login',login)
router.post('/logout',logout)
router.get('/me',fetchUser,me)

export default router