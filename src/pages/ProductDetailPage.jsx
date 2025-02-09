import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) throw new Error("Failed to fetch product");
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p className="text-center text-lg animate-pulse">Loading product...</p>;
    if (error) return <p className="text-center text-red-600">{error}</p>;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden animate-fadeIn">
                <div className="md:w-1/2">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-64 md:h-96 object-cover transform transition duration-300 hover:scale-105"
                    />
                </div>

                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">{product.title}</h2>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">{product.description}</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-gray-200 mt-3">${product.price}</p>
                    <button
                        onClick={() => dispatch(addToCart(product))}
                        className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-300"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
