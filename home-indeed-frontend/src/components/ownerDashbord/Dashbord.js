import React, { useEffect, useState } from "react";
import "../../App.css";
import Requests from "../allrequests/Requests";
import { NavLink, withRouter } from "react-router-dom";

function Dashbord(success) {
  console.log(success);

  const client = 1;

  return (
    <>
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
        <Requests id={client} />
      </div>
    </>
  );
}
export default withRouter(Dashbord);
