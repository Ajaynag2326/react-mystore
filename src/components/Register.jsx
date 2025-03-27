import React from "react";
import { useState,useRef } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
export default function Register() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [label, setLabel] = useState("");
  const colRef=useRef();

  const handleSubmit = () => {
    const existUser = users.find((value) => value.email === user.email);
    if (existUser) {
      setLabel("User Already Exist");
      colRef.current.style.color="red"
    } else {
      setLabel("Welcome");
      colRef.current.style.color="green"
      setUsers([...users, user]);
      setUser({...user, email:"",uname:"",pass:""})
    }
  };

  const handleDelete = (useri) => {
    setUsers(users.filter((value) => value !== useri));
    setLabel("");
  };

  return (
    <div className="Register-container">
      <div className="Register-Box">
        <div>
          <h1>Register</h1>
        </div>
        <div>
          <p>
            <input
              type="email"
              value={user.email}
              placeholder="Enter Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </p>
          <p>
            <input
              type="text"
              value={user.uname}
              placeholder="Enter Name"
              onChange={(e) => setUser({ ...user, uname: e.target.value })}
            />
          </p>
          <p>
            <input
              type="password"
              value={user.pass}
              placeholder="Enter Password"
              onChange={(e) => setUser({ ...user, pass: e.target.value })}
            />
          </p>
          <p>
            <button onClick={handleSubmit}>SignIn</button>
          </p>
          <p>
            <Link to="../login">Already Registered? Login here</Link>
          </p>
          <h3 ref={colRef}>{label}</h3>
        </div>
      </div>
      <div className="Register-Box2">
        <h2>User List</h2>
        <table className="App-Register-Tab">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((value, index) => (
              <tr key={index}>
                <td>{value.uname}</td>
                <td>{value.email}</td>
                <td>{value.pass}</td>
                <td>
                  <button onClick={() => handleDelete(value)}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
