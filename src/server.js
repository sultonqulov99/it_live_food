import express from 'express'
import userRouter from './routes/users.js'
import orderRouter from './routes/orders.js'
import foodRouter from './routes/foods.js'
import path from 'path'
const PORT = process.env.PORT || 4545

const app = express()
app.use(express.json())
app.use("/files/public",express.static(path.join(process.cwd(),'src','uploads')))
app.use(userRouter)
app.use(orderRouter)
app.use(foodRouter)

app.listen(PORT,() => console.log('Server is run'))