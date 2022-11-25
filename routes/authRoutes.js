import express from 'express';
const router = express.Router();

<<<<<<< HEAD
=======
import rateLimiter from 'express-rate-limit';

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes,
  max: 10,
  message:
    'Too many requests from this IP address, please try again after 15 minutes',
})
>>>>>>> added debounce function for search

import { register, login, updateUser } from "../controllers/authController.js";
import authenticateUser from '../middleware/auth.js';

<<<<<<< HEAD
router.route('/register').post(register);
router.route('/login').post(login);
=======
router.route('/register').post(apiLimiter, register);
router.route('/login').post(apiLimiter, login);
>>>>>>> added debounce function for search
router.route('/updateUser').patch(authenticateUser, updateUser);

export default router;
