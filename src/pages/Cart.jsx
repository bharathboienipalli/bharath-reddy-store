import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import '../styles/Cart.css'

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalQty,
    totalAmount,
  } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your Cart is Empty 🛍️</h2>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart 🛒</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.thumbnail} alt={item.title} />
          <div style={{ flex: 1, textAlign: "left", marginLeft: 12 }}>
            <h4>{item.title}</h4>
            <p>Price: ₹{item.price.toLocaleString()}</p>

            <div className="quantity-controls">
              <button className="quantity-btn" onClick={() => {
				if (item.quantity === 1) {
					alert("Minimum quantity is 1. You cannot decrease further.");
				} else {
					decreaseQuantity(item.id);
				}
			}}>
						-
				</button>

              <span className="quantity">{item.quantity}</span>
              <button className="quantity-btn" onClick={() => increaseQuantity(item.id)}>+</button>
            </div>

            <p style={{ marginTop: 8 }}>Item Total: ₹{(item.price * item.quantity).toLocaleString()}</p>
          </div>

          <div>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      <h3 className="grand-total">Grand Total: ₹{totalAmount.toLocaleString()}</h3>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, marginTop: 12 }}>
        <button onClick={clearCart} className="clear-btn">Clear Cart</button>
        <button className="checkout-btn" onClick={() => alert("Feature coming soon! Order functionality will be added later.")
}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;