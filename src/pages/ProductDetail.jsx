import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import '../styles/ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  if (!product)
    return (
      <h2 style={{ textAlign: "center", marginTop: 80 }}>Product not found</h2>
    );

  const handleAdd = () => {
    if (!localStorage.getItem('isLoggedIn')) {
      alert('Please login to add the product to cart.');
      return;
    }
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-detail">
      <img src={product.thumbnail} alt={product.title} />
      <div className="detail-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">₹{product.price.toLocaleString()}</p>

        <div className="added-msg-container">
          {added && <span className="added-msg">✅ Added!</span>}
        </div>

        <button className="add-btn" onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
