import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <>
      <div className=" mb-5 justify-around items-center border-solid border-4 border-gray-900 p-30 m-30 items-stretch ...">
        <Link className="product" to={`/products/${props._id}`}>
          <img className="product-img" src={props.imgURL} alt={props.name} />
          <div className="" >{props.title}</div>
          <div className="">{`$${props.price}`}</div>
        </Link>
      </div>
    </>
  );
};
export default Product;
