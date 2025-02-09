import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-xl text-gray-700 mt-2">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
