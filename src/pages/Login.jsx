import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const { login } = useAuth(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      login(name);
    } else {
      alert("Please enter your name before logging in.");
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome to Bharath Reddy’s Store</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
