import express from 'express'
import userController from '../controllers/users.js'
const {Router} = express

const router = Router()

router.get("/api/users",userController.GET)
router.post("/api/register",userController.REGISTER)
router.get("/api/users/orders/:userId",userController.GET_ORDERS)

export default router