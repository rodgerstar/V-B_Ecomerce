import React from "react";
import { assets } from "../assets/assets.js";

const Footer = () => {
    return (
        <>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div>
                    <img src={assets.logo} className="mb-5 w-32" alt="" />
                    <p className="w-full md:w-2/3 text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet autem commodi culpa cumque est expedita fuga.
                    </p>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+254-758-023-590</li>
                        <li>vandbwears@info.com</li>
                    </ul>
                </div>
            </div>


            <div className="mt-10 border-t border-gray-300 text-center py-5 w-full">
                <p className="text-sm text-gray-600">
                    © 2025 V & B - All Rights Reserved | powered by NEXEL
                </p>
            </div>
        </>
    );
};

export default Footer;
