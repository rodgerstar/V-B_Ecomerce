import React from 'react';
import {assets} from "../assets/assets.js";

const Add = () => {
    return (
        <form className='flex flex-col w-full items-start gap-3'>
            <div>
                <p className='mb-2'>Upload Image</p>

                <div className='flex gap-2'>
                    <label htmlFor="image1">
                        <img className='w-20' src={assets.upload_area} alt=""/>
                        <input type="file" id="image1" hidden/>
                    </label>
                    <label htmlFor="image2">
                        <img className='w-20' src={assets.upload_area} alt=""/>
                        <input type="file" id="image2" hidden/>
                    </label>
                    <label htmlFor="image3">
                        <img className='w-20' src={assets.upload_area} alt=""/>
                        <input type="file" id="image3" hidden/>
                    </label>
                    <label htmlFor="image4">
                        <img className='w-20' src={assets.upload_area} alt=""/>
                        <input type="file" id="image4" hidden/>
                    </label>
                </div>
            </div>

            <div className='w-full'>
                <p className='mb-2'>Product Name</p>
                <input className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here .....' required/>
            </div>
            <div className='w-full'>
                <p className='mb-2'>Product Description</p>
                <textarea className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write Content here .....' required/>
            </div>
            <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
                <div>
                    <p className='mb-2'>Product Category</p>
                    <select className='w-full px-3 py-2'>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Kids">Kids</option>
                    </select>
                </div>
                <div>
                    <p className='mb-2'>Sub Category</p>
                    <select className='w-full px-3 py-2'>
                        <option value="Topwear">Top wear</option>
                        <option value="Bottomwear">Bottom wear</option>
                        <option value="Winterwear">Winter wear</option>
                    </select>
                </div>
                <div>
                    <p className='mb-2'>Product Price</p>
                    <input className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='99'/>
                </div>
            </div>

            <div>
                <p className='mb-2'>Product Sizes</p>
                <div className='flex gap-3'>
                    <div>
                        <p className='bg-slate-200 px-3 py-1 cursor-pointer'>S</p>
                    </div>
                    <div>
                        <p className='bg-slate-200 px-3 py-1 cursor-pointer'>M</p>
                    </div>
                    <div>
                        <p className='bg-slate-200 px-3 py-1 cursor-pointer'>L</p>
                    </div>
                    <div>
                        <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XL</p>
                    </div>
                    <div>
                        <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XX</p>
                    </div>
                </div>
            </div>
            
            <div className='flex gap-2 mt-2'>
                <input type="checkbox" id='bestseller'/>
                <label className='cursor-pointer' htmlFor="bestseller">Add to Bestseller</label>
            </div>

            <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>

        </form>
    );
}

export default Add;
