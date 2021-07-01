import './ProductCard.css';
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    return (
        <div className="product-card">
            <Link className="card" to={`/products/${product._id}`}>
                <img className="product-card-image" src={product.imgURL} alt={product.title} />
                <div>View</div>
            </Link>
        </div>
    )
}

export default ProductCard