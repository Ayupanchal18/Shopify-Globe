import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/cartItem";

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.items) || []; // Ensure it's an array
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-400">Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <div className="flex justify-between items-center mt-6">
                        <span className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</span>
                        <Link to="/checkout">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition">
                                Proceed to Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
