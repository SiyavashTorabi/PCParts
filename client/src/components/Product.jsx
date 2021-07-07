import { Link } from "react-router-dom";

const Product = (props) => {
  // const [hover, setHover] = useState(false);
  return (
    <div className="product mb-5 justify-around items-center border-solid border-4 border-gray-900 p-30"
      // onMouseOver={() => setHover(true)}
      // onMouseOut={() => setHover(false)}
      
    
    
    >
      <Link to={`/products/${props._id}`}>
        <img className="product-img" src={props.imgURL} alt={props.name} />
      
          <div className="product-overlay">

            <div className="">{props.title}</div>
            <div className="">{`$${props.price}`}</div>
          </div>
      
      </Link>
    </div>
  );
};
export default Product;
