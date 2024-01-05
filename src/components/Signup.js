import React, { useState, useEffect } from "react";
import axios from "axios";

export const Signup = () => {
  const [name, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/users/register", {
        name,
        email,
        password,
      })
      .then(function (result) {
        console.log(result);
        if (result.data) {
          localStorage.setItem("user", JSON.stringify(result.data));
          alert("Welcome to Verve, " + result.data.name);
          window.location.href = "/";
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="row container">
      <div className="col-md-12">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={name}
              onChange={(e) => setFirstName(e.target.value)}
              name="name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />{" "}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};
