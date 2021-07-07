import React from "react";
import Product from "../components/Product";
import { getProducts } from "../services/products";
import { useState, useEffect } from "react"; ////
import Footer from "../components/Footer";

export default function Products() {
  const [products, setProducts] = useState([]); 
  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <div className=" grid grid-cols-3 gap-2 place-items-center p-30 min-h-screen justify-items-center">
        {products.map((product, index) => {
          return (
            <div key={index}>
              <Product
                _id={product._id}
                imgURL={product.imgURL}
                price={product.price}
                title={product.title}
                key={index}
              />
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
