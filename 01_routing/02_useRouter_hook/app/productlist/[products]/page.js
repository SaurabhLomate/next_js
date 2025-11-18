// "use client";
import React from "react";

// ? *************** dynamic Routing  ***************

const Products = async ({ params }) => {
  const { products } = await params;

  return <div>you searched for product {products}</div>;
};

export default Products;
