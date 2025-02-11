import React, {useContext} from 'react';
import {ShopContext} from "../context/ShopContext.jsx";
import {useSearchParams} from "react-router-dom";

const Verify = () => {
     const {navigate, token, setCartItems} = useContext(ShopContext)
     const [serchParams, setSearchParams] = useSearchParams()

    const success = serchParams.get('success')
    const prderId = setSearchParams.get('orderId')

    const verifyPayment = async () => {

    }

    return (
        <div>

        </div>
    );
}

export default Verify;
