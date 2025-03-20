import express from 'express'
import userAuth from '../middlewares/userAuth.js';
import { placeOrder, placeOrderRazorpay, userOrder, verifyRazorpay } from '../controllers/orderControllers.js';



const orderRouter = express.Router();


// Payment Features
orderRouter.post('/place',userAuth,placeOrder)
orderRouter.post('/razorpay',userAuth, placeOrderRazorpay)


//User Feature
orderRouter.post('/userorder',userAuth,userOrder)

//verify Payment
orderRouter.post('/verifyRazorpay', userAuth, verifyRazorpay)


export default orderRouter;