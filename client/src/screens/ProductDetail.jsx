import { useState, useEffect } from "react";
import './ProductDetail.css'
import { getProduct, deleteProduct } from "../services/products";
import { useParams, Link } from "react-router-dom";

const ProductDetail = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="product-detail text-4xl">
      <img
        className="product-detail-image"
        src={product.imgURL}
        alt={product.title}
      />
      <div className="detail bg-indigo-900 text-gray-50 ">
        <div className="title m-2">{product.title}</div>
        <div className="price text-6xl m-2 ">{`$${product.price}`}</div>
        <div className="description m-2">{product.description}</div>
        <div className="button-container m-2">
          <Link className="edit-button" to={`/products/${product._id}/edit`}>
            Edit
          </Link>
          <button
            className="delete-button"
            onClick={() => deleteProduct(product._id)}
          >
            Delete
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ProductDetail;
