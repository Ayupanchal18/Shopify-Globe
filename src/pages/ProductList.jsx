import React from "react";
import ProductItem from "./ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";

const ProductList = () => {
    const { products, loading, error } = useFetchProducts();

    if (loading) return <p className="text-center text-lg animate-pulse">Loading products...</p>;
    if (error) return <p className="text-center text-red-600">{error}</p>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="animate-fadeIn">
                        <ProductItem product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
