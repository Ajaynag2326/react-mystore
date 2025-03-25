import React from "react";
import "./Login.css"
// import Register from "./Register";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="Login-container">
    <div className="Login-Box">
      <div>
        <h1>Login</h1>
        </div>
      <div>
        <p><input type="text" placeholder="Enter Name" /></p>
        <p><input type="password" placeholder="Enter Password" /></p>
        <p><button>Login</button></p>
        <p><Link to="../register">Not Registered? Create Account</Link></p>
      </div>
    </div>
    </div>
  );
}
