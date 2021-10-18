import React, { useEffect, useState } from "react";
import "../../App.css";
import Requests from "./Requests";
import { NavLink } from "react-router-dom";
import AddHome from "./AddHome";
export default function AddLocation() {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZip] = useState("");
  const [app_nbr, setApp] = useState("");

  const [id_location, setIdLocation] = useState(null);

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(id_location);
  function handleLocation(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        city,
        state,
        zipcode,
        app_nbr,
      }),
    })
      .then((response) => response.json())
      .then((r) => {
        setIsLoading(false);
        setIdLocation(r.id);
        if (!r.id) {
          r.json().then((err) => setErrors(err.errors));
        }
      });
  }

  return (
    <div>
      <h2>Adress</h2>
      <form className="dashform">
        <div className="form-group col-md-6">
          <label for="inputAddress">Appartement Number</label>
          <input
            type="integer"
            className="form-control"
            id="app_nbr"
            value={app_nbr}
            onChange={(e) => setApp(e.target.value)}
            placeholder="114"
          ></input>
        </div>
        <div className="form-group col-md-6">
          <label for="inputAddress">Street</label>
          <input
            type="text"
            className="form-control"
            id="adress"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="Amstrong ave"
          ></input>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Brooklyn"
            ></input>
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">State</label>
            <input
              type="string"
              className="form-control"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="NY"
            ></input>
          </div>
          <div className="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input
              type="integer"
              className="form-control"
              id="zipcode"
              value={zipcode}
              onChange={(e) => setZip(e.target.value)}
              placeholder="10301"
            ></input>
          </div>
        </div>
        <button className="dashbtn" onClick={handleLocation}>
          {" "}
          Next
        </button>
        {id_location != null ? <AddHome id={id_location} /> : <></>}
      </form>
    </div>
  );
}
