import express from 'express'

import authenticateUser from '../middleware/auth.js'

const router = express.Router()

import rateLimiter from 'express-rate-limit'

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000, //15 minutes
    max: 10,
    message: 'Too many requests from this IP, please try again in 15 minutes'
})

import { register, login, updateUser } from '../controllers/authController.js'

router.route('/register').post(apiLimiter, register)
router.route('/login').post(apiLimiter, login)
router.route('/updateUser').patch(authenticateUser, updateUser)

export default router