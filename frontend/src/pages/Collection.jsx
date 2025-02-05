import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { assets } from "../assets/assets.js";
import Title from "../components/Title.jsx";
import ProductItem from "../components/ProductsItems.jsx";

const Collection = () => {

    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState("relevant");

    const toggleCategory = (e) => {
        const value = e.target.value;
        if (category.includes(value)) {
            setCategory((prev) => prev.filter((item) => item !== value));
        } else {
            setCategory((prev) => [...prev, value]);
        }
    };

    const toggleSubCategory = (e) => {
        const value = e.target.value;
        if (subCategory.includes(value)) {
            setSubCategory((prev) => prev.filter((item) => item !== value));
        } else {
            setSubCategory((prev) => [...prev, value]);
        }
    };

    const applyFilter = () => {
        let productsCopy = products.slice();

        if (showSearch && search) {
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }

        // Filter by Category
        if (category.length > 0) {
            productsCopy = productsCopy.filter((item) => category.includes(item.category));
        }

        // Filter by SubCategory
        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
        }

        setFilterProducts(productsCopy);
    };

    const sortProduct = () => {
        let sortedProducts = [...filterProducts]; // Clone the array to avoid in-place sorting
        switch (sortType) {
            case "low-high":
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case "high-low":
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case "relevant": // Maintain original order (products' initial order)
            default:
                sortedProducts = [...products]; // Reset to original order
                break;
        }
        setFilterProducts(sortedProducts);
    };

    // Run applyFilter when category or subCategory changes
    useEffect(() => {
        applyFilter();
    }, [category, subCategory, products, search, showSearch]);

    useEffect(() => {
        sortProduct();
    }, [sortType]);


    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
            {/* filter options */}
            <div className="min-w-60">
                <div className="flex items-center cursor-pointer gap-2">
                    <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl">
                        FILTERS
                    </p>
                    <img
                        className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
                        src={assets.dropdown_icon}
                        alt=""
                    />
                </div>
                {/* CATEGORY FILTER */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
                    <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input
                                onChange={toggleCategory}
                                className="w-3"
                                type="checkbox"
                                value="Men"
                                checked={category.includes("Men")}
                            />{" "}
                            Men
                        </p>
                        <p className="flex gap-2">
                            <input
                                onChange={toggleCategory}
                                className="w-3"
                                type="checkbox"
                                value="Women"
                                checked={category.includes("Women")}
                            />{" "}
                            Women
                        </p>
                        <p className="flex gap-2">
                            <input
                                onChange={toggleCategory}
                                className="w-3"
                                type="checkbox"
                                value="Kids"
                                checked={category.includes("Kids")}
                            />{" "}
                            Kids
                        </p>
                    </div>
                </div>

                {/* SUB-CATEGORY FILTER */}
                <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}>
                    <p className="mb-3 text-sm font-medium">TYPE</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input
                                onChange={toggleSubCategory}
                                className="w-3"
                                type="checkbox"
                                value="Topwear"
                                checked={subCategory.includes("Topwear")}
                            />{" "}
                            Top-wear
                        </p>
                        <p className="flex gap-2">
                            <input
                                onChange={toggleSubCategory}
                                className="w-3"
                                type="checkbox"
                                value="Bottomwear"
                                checked={subCategory.includes("Bottomwear")}
                            />{" "}
                            Bottom-wear
                        </p>
                        <p className="flex gap-2">
                            <input
                                onChange={toggleSubCategory}
                                className="w-3"
                                type="checkbox"
                                value="Winterwear"
                                checked={subCategory.includes("Winterwear")}
                            />{" "}
                            Warm-wear
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    <Title text1={"ALL"} text2={"COLLECTIONS"} />
                    {/* PRODUCT SORT */}
                    <select
                        onChange={(e) => setSortType(e.target.value)}
                        className="border-2 border-gray-300 text-sm px-2 w-full max-w-[180px] truncate"
                    >
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>
                {/* MAP PRODUCTS */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {filterProducts.map((item, index) => (
                        <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;
