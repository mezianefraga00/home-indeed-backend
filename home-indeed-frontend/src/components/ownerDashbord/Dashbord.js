import React, { useEffect, useState } from "react";
import "../../App.css";
import Requests from "../allrequests/Requests";
import { NavLink, withRouter } from "react-router-dom";
import { Redirect } from "react-router";
import Logout from "./Logout";
import { useLocation } from "react-router";

import SearchLocationInput from "../search/SearchLocationInput";
function Dashbord() {
  let location = useLocation();

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => setUser(false));
  }
  const [owner, setUser] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch("/me").then((r) => {
      r.ok ? r.json() : setUser(false);
    });
  }, []);
  useEffect(() => {
    fetch("/me")
      .then((response) => response.json())
      .then((user) => {
        setUsername(user.name);
      });
  }, []);
  return (
    <>
      {owner !== false ? (
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
              <NavLink className="btn btn-danger rounded-pill" to="/dashbord">
                {"Welcome   " + username}
              </NavLink>

              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo03"
              >
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
                  <li>
                    <NavLink
                      className="btn btn-light"
                      to={{
                        pathname: "/dashbord/addlocation",
                        state: { value: owner },
                      }}
                    >
                      Add Home
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink
                      className="btn btn-light"
                      to={{
                        pathname: "/dashbord/updatehome",
                        state: { value: owner },
                      }}
                    >
                      Update Home
                    </NavLink>
                  </li>

                  <li>
                    {" "}
                    <NavLink
                      className="btn btn-light"
                      to={{
                        pathname: "/dashbord/deletehome",
                        state: { value: owner },
                      }}
                    >
                      Delete Home
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

                    <li>
                      <button
                        className="btn btn-danger btn-pill"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
            </nav>

            <img
              className="imagehome"
              style={{
                display: location.pathname != "/dashbord" ? "none" : "block",
              }}
              src="/house.jpg"
              alt="home page"
            ></img>
          </div>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}
export default withRouter(Dashbord);
