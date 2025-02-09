import React from "react";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <ProductList />
    </div>
  );
};

export default Home;
