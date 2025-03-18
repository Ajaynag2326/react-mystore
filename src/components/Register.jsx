import React from 'react'
import "./Register.css"
export default function Register() {
  return (
    <div className="Register-container">
    <div className="Register-Box">
      <div>
        <h1>Register</h1>
      </div>
      <div>
        <p><input type="email" placeholder='Enter Email' /></p>
        <p><input type="text" placeholder='Enter Name' /></p>
        <p><input type="password" placeholder='Enter Password' /></p>
        <p><input type="date"/></p>
        <p><button><a href="/login">SignIn</a></button></p>
        <p>Already Registerd?</p>
        <p><button><a href="/login">Login</a></button></p>
      </div>
    </div>
    </div>
  )
}
