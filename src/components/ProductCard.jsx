import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import '../styles/ProductCard.css'

const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!localStorage.getItem('isLoggedIn')) {
      alert('Please login to add the product to cart.');
      return;
    }
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const alreadyInCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">₹{product.price.toLocaleString()}</p>

      <div className="added-msg-container">
        {added && <span className="added-msg">✅ Added!</span>}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
        <button onClick={handleAddToCart}>
          Add to Cart
        </button>

        <Link to={`/product/${product.id}`}>
          <button>View</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;