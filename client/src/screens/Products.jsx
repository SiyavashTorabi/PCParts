import React from 'react'
import Product from "../components/Product"
import { getProducts } from '../services/products'
import { useState, useEffect } from 'react' ////


export default function Products() {
  const [products, setProducts] = useState([]) ///
  useEffect(() => { ///
    const fetchProducts = async () => {
      const allProducts = await getProducts()
      setProducts(allProducts)
    }
    fetchProducts()
  }, [])
  /// make an axios req to get all products (import get all products from services/products)
  /// make the req inside the useEffect (import useEffect)
  ///make sure all data are returning
  /// store data into stately verible called products (import useState)
//// if the data is stored inside the products verible then we can map through it 
  //// and for each item we are rendering Product component 
  return (
    
    <div className='products'>
        {products.map((product, index) => {
          return (
            <Product
              _id={product._id}
              name={product.title}
              imgURL={product.imgURL}
              price={product.price}
              key={index}
            />
          )
        })}
      </div> 
  )
}
