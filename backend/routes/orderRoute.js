import express from "express";


import {placeOrder, placeOrderStripe, placeOrderRazorpay, alLOrders, userOrders, updateStatus} from "../controllers/ordersController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router()


// admin routes
orderRouter.post('/list',adminAuth, alLOrders)
orderRouter.post('/status',adminAuth, updateStatus)

// payment routes
orderRouter.post('/place',authUser, placeOrder)
orderRouter.post('/stripe',authUser, placeOrderStripe)
orderRouter.post('/razorpay',authUser, placeOrderRazorpay)

// user routes
orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter