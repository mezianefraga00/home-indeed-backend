import React, { useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";

import Login from "./Login";
import SearchLocationInput from "./search/SearchLocationInput";
function Navbar() {
  let location = useLocation();
  console.log(location);
  const [loginBox, setLoginBox] = useState(true);

  const loginBoxOpen = (e) => {
    e.preventDefault();
    setLoginBox(loginBox ? false : true);
    !loginBox
      ? (document.body.style.overflow = "visible")
      : (document.body.style.overflow = "hidden");
  };
  const handleSubmit = () => {
    loginBoxOpen();
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink className="btn btn-danger rounded-pill" to="/">
            Home Indeed
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="btn btn-light" to="/buy">
                  Buy
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="btn btn-light" to="/rent">
                  Rent
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="search">
            <form className="form-inline my-2 my-lg-0">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li>
                  <SearchLocationInput />
                </li>
                <li></li>
                <li>
                  <button
                    className="btn btn-danger btn-pill"
                    onClick={loginBoxOpen}
                  >
                    LOGIN
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </nav>
      </div>
      <div className="containerlo">
        <Login open={loginBox} loginBoxOpen={loginBoxOpen} />
      </div>
      <img
        className="imagehome"
        style={{ display: location.pathname != "/" ? "none" : "block" }}
        src="/house.jpg"
        alt="home page"
      ></img>
      ;
    </>
  );
}
export default Navbar;
