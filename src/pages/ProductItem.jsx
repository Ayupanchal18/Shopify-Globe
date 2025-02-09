import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 p-4">
            <Link to={`/product/${product.id}`} className="block">
                <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover rounded-md" />
                <h3 className="text-lg font-semibold mt-2 text-gray-900 dark:text-gray-100">{product.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">${product.price}</p>
            </Link>
            <button
                onClick={() => dispatch(addToCart(product))}
                className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-300"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductItem;
