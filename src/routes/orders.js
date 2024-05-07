import express from 'express'
import orderController from '../controllers/orders.js'
const {Router} = express

const router = Router()

router.post("/api/orders",orderController.ORDERS)

export default router