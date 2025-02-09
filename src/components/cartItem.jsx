import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
            <div className="flex items-center">
                <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
                <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">${item.price} x {item.quantity}</p>
                </div>
            </div>
            <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
            >
                Remove
            </button>
        </div>
    );
};

export default CartItem;
