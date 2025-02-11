import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";


// placing order using cash on delivery

const placeOrder = async (req,res) => {
    try {

        const { userId, items, amount, address, } = req.body

        const orderData = {
            userId,
            items,
            amount,
            paymentMethod: "COD",
            payment:false,
            address,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true, message:"Order Placed"})

        
    }catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }

}

// placing order using Stripe Acc

const placeOrderStripe = async (req,res) => {

}

// placing order using razor pay method

const placeOrderRazorpay = async (req,res) => {

}


// all orders fro admin panel

const alLOrders = async (req,res) => {

}

// user order data for frontend

const userOrders = async (req,res) => {
    try{

        const {userId } = req.body

        const orders = await orderModel.find({userId})
        res.json({success:true,orders})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }


}

// update order status from admin panel

const updateStatus = async (req,res) => {

}


export {placeOrder, placeOrderStripe, placeOrderRazorpay, alLOrders, userOrders, updateStatus}