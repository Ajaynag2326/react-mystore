import React from "react";
import { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
export default function Register() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [label,setLabel]=useState("");
  
  const handleSubmit = () => {
    const existUser = users.find((value) => value.email === user.email);
    if(existUser){
      setLabel("User Already Exist");
    }
    else{
      setLabel("");
      setUsers([...users, user]);
    }
  };

  const handleDelete = (useri) => {
    setUsers(users.filter((value) => value !== useri));
    setLabel("")
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
              placeholder="Enter Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setUser({ ...user, uname: e.target.value })}
            />
          </p>
          <p>
            <input
              type="password"
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
         <h3 style={{color:'red'}}>{label}</h3> 
        </div>
      </div>
      <div className="Register-Box2">
      <h2>User List</h2>
      {users.map((value, index) => (
          <div key={index}>
            {value.email}|{value.uname}|{value.pass}--<button onClick={() => handleDelete(value)}>X</button>
          </div>
        ))
        }
      </div>

    </div>
  );
}
