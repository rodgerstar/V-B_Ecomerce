import React, {useContext, useEffect} from 'react';
import {ShopContext} from "../context/ShopContext.jsx";
import {useSearchParams} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";


const Verify = () => {
     const {navigate, token, setCartItems, backendUrl} = useContext(ShopContext)
     const [serchParams, setSearchParams] = useSearchParams()

    const success = serchParams.get('success')
    const orderId = serchParams.get('orderId')

    const verifyPayment = async () => {
         try {
             if (!token) {
                 return null
             }
             const respoonse = await axios.post(backendUrl + '/api/order/verifyStripe', {success,orderId}, {headers: {token}})

             if (respoonse.data.success) {
                 setCartItems({})
                 navigate('/orders')
             }else {
                 navigate('/cart')
             }
         } catch (error) {
             console.log(error)
             toast.error(error.message)
         }
    }

    useEffect(() => {
        verifyPayment()
    }, [token]);

    return (
        <div>

        </div>
    );
}

export default Verify;
