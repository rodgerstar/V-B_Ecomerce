import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
const allowedOrigins = process.env.CORS_ALLOWED_ORIGINS ? process.env.CORS_ALLOWED_ORIGINS.split(',') : ['https://v-b-front.vercel.app', 'https://v-b-admin.vercel.app'];

app.use(cors((req, callback) => {
    if (allowedOrigins.includes(req.header('Origin')) || !req.header('Origin')) {
        callback(null, { origin: true });
    } else {
        callback(new Error('Not allowed by CORS'));
    }
}));


// api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)



app.get('/', (req,res)=>(
    res.send("API Working")
))

app.listen(port, ()=> console.log('server started on PORT : ' + port))
