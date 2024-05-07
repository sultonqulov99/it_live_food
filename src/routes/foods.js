import express from 'express'
import foodController from '../controllers/foods.js'
const {Router} = express

const router = Router()

router.get("/api/foods",foodController.GET)

export default router