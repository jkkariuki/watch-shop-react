import React, { useState, useEffect } from "react";
import { getMe } from "../apiCalls/userApi";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export const Navbar = () => {
  const [authenticated, setAuthenticated] = useState(null);
  const [user, setUser] = useState();

  useEffect(() => {
    getMe().then((res) => {
      setAuthenticated(res);
      setUser(JSON.parse(localStorage.getItem("user")));
    });
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();

    const result = await axios
      .post("https://watch-shop-server.onrender.com/api/users/logout")
      .then((response) => {
        alert(response.data.message);
        localStorage.setItem("user", null);
        window.location.href = "/";
      });

    window.location.href = "/";
  };

  return (
    <div className="navbox">
      <header className="p-3 text-bg-light">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img Stunning view of the Sydney Opera House, with the harbor and cityscape in the background, iconic, high detail, cityscapel"
                aria-label="Bootstrap"
              ></svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-black">
                  Men's
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-black">
                  Women's
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-black">
                  Technology
                </a>
              </li>
              <li>
                <a href="/collection" className="nav-link px-2 text-black">
                  Collection
                </a>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              {authenticated ? (
                <>
                  Hey,{user.name}
                  <button
                    onClick={handleLogout}
                    type="button"
                    className="btn btn-outline-dark me-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button type="button" className="btn btn-outline-dark me-2">
                    <a href="/login"> Login</a>
                  </button>
                  <button type="button" className="btn btn-warning">
                    Sign-up
                  </button>
                </>
              )}
              <i class="fa-solid fa-cart-shopping fa-xl"></i>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
