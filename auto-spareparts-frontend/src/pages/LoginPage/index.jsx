import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    navigate("/products");
  };

  return (
    <div className="login-page centered-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="button submit" type="submit">Login</button>
      </form>
      <p>Don"t have an account? <a href="/signup">Sign up here</a></p>
    </div>
  );
};

export default LoginPage;

