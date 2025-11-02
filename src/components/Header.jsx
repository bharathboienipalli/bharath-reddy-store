import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import logo from "../assets/bharath_reddy-store-logo.png";
import "../styles/Header.css";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useAuth();

  const totalQty = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);

  const handleCartClick = (e) => {
    if (!user) {
      e.preventDefault();
      alert("Please login to view your cart.");
    }
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Bharath Store Logo" className="logo-img" />
        <Link to="/" className="logo-text">
          Bharath Reddy Store
        </Link>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart-link" onClick={handleCartClick}>
          Cart <span className="cart-count">({totalQty})</span>
        </Link>

        {user ? (
          <div className="user-section">
            <span className="welcome">Welcome, {user}</span>
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="login-link">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
