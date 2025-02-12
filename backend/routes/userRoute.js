import express from "express";
import {loginUser,registerUser,adminLogin} from "../controllers/userController.js";


const userRouter = express.Router();


userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)
userRouter.get('/test', (req, res) => {
    res.json({ success: true, message: "User routes are working!" });
});


export default userRouter