import { useState, useEffect } from "react";
import "./ProductDetail.css";
import { getProduct, deleteProduct } from "../services/products";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";

const ProductDetail = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);

  const history = useHistory();
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

  const handleDelete = async () => {
    const res = await deleteProduct(id);
    console.log(res);
    history.push("/products");
  };

  return (
    <>
      <div className="product-detail">
        <img
          className="product-detail-image"
          src={product.imgURL}
          alt={product.title}
        />
        <div className="details-button-container">
          <div className="detail 0 text-gray-50">
            <div className="title text-xl">{product.title}</div>
            <div className="description text-base">{product.description}</div>
            <div className="price text-sm">{`$${product.price}`}</div>
          </div>
          <div className="button-container">
            <Link
              className="details-button"
              to={`/products/${product._id}/edit`}
            >
              Edit
            </Link>
            <button
              className="details-button"
              onClick={() => deleteProduct(product._id)}
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
