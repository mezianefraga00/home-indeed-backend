import React, { useEffect, useState } from "react";
import "../../App.css";
import Requests from "../allrequests/Requests";
import { NavLink, withRouter } from "react-router-dom";
import { Redirect } from "react-router";
import Logout from "./Logout";

function Dashbord() {
  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => setUser(false));
  }
  const [owner, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me")
      .then((r) => {
        r.ok ? r.json() : setUser(false);
      })
      .then((home) => {
        setUser(home);
      });
  }, []);

  return (
    <>
      {owner !== false ? (
        <>
          <div className="dashButton">
            <NavLink
              className="btn btn-success"
              to={{
                pathname: "/dashbord/addlocation",
                state: { value: owner },
              }}
            >
              Add Home
            </NavLink>
            &nbsp;
            <NavLink
              className="btn btn-success"
              to={{
                pathname: "/dashbord/updatehome",
                state: { value: owner },
              }}
            >
              Update Home
            </NavLink>
            &nbsp;
            <NavLink
              className="btn btn-success"
              to={{
                pathname: "/dashbord/deletehome",
                state: { value: owner },
              }}
            >
              Delete Home
            </NavLink>
          </div>
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div>
            <Requests id={owner} />
          </div>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}
export default withRouter(Dashbord);
