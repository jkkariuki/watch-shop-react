import React, { useState, useEffect } from "react";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    axios
      .post("https://watch-shop-server.onrender.com/api/users/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data) {
          localStorage.setItem("user", JSON.stringify(result.data));
          alert("login successful");
          window.location.href = "/";
        }
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="row container">
      <div className="col-md-12">
        <form onSubmit={handleSubmit}>
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
