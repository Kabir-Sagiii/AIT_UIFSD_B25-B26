import React from "react";
import "./Login.css";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-header">
          <h1>Login</h1>
          <p>Welcome back! Please login to your account</p>
        </div>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          <button onClick={login} type="button" className="login-btn">
            Login
          </button>
        </form>

        <div className="login-footer">
          <p>
            Don't have an account?{" "}
            <a href="#" className="signup-link">
              Sign up here
            </a>
          </p>
        </div>

        <div className="social-login">
          <p>Or login with</p>
          <div className="social-buttons">
            <button className="social-btn google">Google</button>
            <button className="social-btn facebook">Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
}
