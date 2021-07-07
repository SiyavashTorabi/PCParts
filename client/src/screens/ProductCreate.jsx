import { useState } from "react";
import "./ProductCreate.css"
import Footer from "../components/Footer";
import { Redirect } from "react-router-dom";
import { createProduct } from "../services/products";

const ProductCreate = (props) => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    imgURL: "",
    price: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newProduct = product
    if (!product.imgURL) {
       newProduct={
        ...newProduct,
        imgURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
      };
    }
    const created = await createProduct(newProduct);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/products`} />;
  }
  return (
    <>
      <form
        className="flex space-y-6 flex-col justify-center items-center border-8 border-black-100 mb-52 bg-green-500"
        onSubmit={handleSubmit}
      >
        <input
          className="mt-5 bg-green-200"
          placeholder="Title"
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
          className="mt-5 bg-green-200"
          rows={10}
          placeholder="Description"
          value={product.description}
          name="description"
          required
          onChange={handleChange}
        />
        <button type="submit" className="create-button">
          Add PC Part
        </button>
      </form>
      <Footer />
    </>
  );
};

export default ProductCreate;
