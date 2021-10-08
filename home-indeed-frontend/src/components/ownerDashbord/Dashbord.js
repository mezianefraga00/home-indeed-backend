import React, { useEffect, useState } from "react";
import "../../App.css";
import Requests from "./Requests";
import { NavLink } from "react-router-dom";

export default function Dashbord() {
  const [client, setClient] = useState({});
  useEffect(() => {
    fetch("/owners/1")
      .then((response) => response.json())
      .then((owner) => {
        setClient(owner);
      });
  }, []);
  return (
    <>
      <div className="dashButton">
        <NavLink className="btn btn-success" to="/dashbord/addhome">
          Add Home
        </NavLink>
        &nbsp;
        <NavLink className="btn btn-success" to="/dashbord/updatehome">
          Update Home
        </NavLink>
        &nbsp;
        <NavLink className="btn btn-success" to="/dashbord/deletehome">
          Delete Home
        </NavLink>
      </div>
      <div>
        <Requests id={client.id} />
      </div>
    </>
  );
}
