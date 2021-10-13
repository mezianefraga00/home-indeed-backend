import React, { useEffect, useState } from "react";
import "../../App.css";
import Requests from "../allrequests/Requests";
import { NavLink, useHistory } from "react-router-dom";

export default function Dashbord(message) {
  console.log(message);
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
      {!message ? (
        <div className="alert-primary">Your home has been added, Thank you</div>
      ) : (
        <></>
      )}
      <div className="dashButton">
        <NavLink className="btn btn-success" to="/dashbord/addlocation">
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
