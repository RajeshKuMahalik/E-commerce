import express from 'express'
import cors from 'cors'
import connectDb from './config/mongodb.js';
import 'dotenv/config'
import userRouter from './routes/userRoute.js';
import orderRouter from './routes/orderRoute.js';






//app config
const app = express()
const port = process.env.PORT || 4000;
connectDb()


//middlewares
app.use(express.json())
app.use(cors())


//api end point
app.use('/api/user', userRouter)
app.use('/api/order',orderRouter)






app.get('/',(req,res)=>{
    res.send("API WORKING")
})

app.listen(port, ()=>console.log("Server Running",port))