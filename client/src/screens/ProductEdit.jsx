import { useState, useEffect } from "react";

import { useParams, Redirect } from "react-router-dom";
import "./ProductEdit.css";
import { getProduct, updateProduct } from "../services/products";
import Footer from "../components/Footer";
const ProductEdit = (props) => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    imgURL: "",
    price: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateProduct(id, product);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/products/${id}`} />;
  }

  return (
    <>
   
        <form
          className="flex space-y-6 flex-col justify-center items-center border-8 border-black-100 mb-52 bg-green-500"
          onSubmit={handleSubmit}
        >
          <input
            className="mt-5 bg-green-200"
            placeholder="title"
            value={product.title}
            name="title"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="mt-5 bg-green-200"
            placeholder="Image Link"
            value={product.imgURL}
            name="imgURL"
            required
            onChange={handleChange}
          />
          <input
            className="mt-5 bg-green-200"
            placeholder="Price"
            value={product.price}
            name="price"
            required
            onChange={handleChange}
          />
          <textarea
            className=" mt-5 bg-green-200"
            rows={10}
            cols={78}
            placeholder="Description"
            value={product.description}
            name="description"
            required
            onChange={handleChange}
          />
          <button type="submit" className="save-button mb-5">
            Edit PC Part
          </button>
        </form>

      <Footer />
    </>
  );
};

export default ProductEdit;
