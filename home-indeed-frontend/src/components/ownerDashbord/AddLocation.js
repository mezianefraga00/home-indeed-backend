import React, { useEffect, useState } from "react";
import "../../App.css";
<<<<<<< HEAD
import Requests from "./Requests";
import { NavLink } from "react-router-dom";
import AddHome from "./AddHome";
export default function AddLocation() {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZip] = useState("");
  const [app_nbr, setApp] = useState("");

=======
import { Redirect } from "react-router";

import AddHome from "./AddHome";
import MapboxAutocomplete from "react-mapbox-autocomplete";

export default function AddLocation() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      r.ok ? r.json() : setUser(false);
    });
  }, []);
>>>>>>> 984a89dc2c9b08caad1e6b1072e6a4dc73ad5051
  const [id_location, setIdLocation] = useState(null);

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
  console.log(id_location);
=======
  const [adress, setSearch] = useState([]);
  function suggestionSelect(result, lat, lng, text) {
    setSearch(result);
  }

>>>>>>> 984a89dc2c9b08caad1e6b1072e6a4dc73ad5051
  function handleLocation(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
<<<<<<< HEAD
        city,
        state,
        zipcode,
        app_nbr,
=======
        adress,
>>>>>>> 984a89dc2c9b08caad1e6b1072e6a4dc73ad5051
      }),
    })
      .then((response) => response.json())
      .then((r) => {
        setIsLoading(false);
        setIdLocation(r.id);
        if (!r.id) {
<<<<<<< HEAD
          r.json().then((err) => setErrors(err.errors));
=======
          setErrors("Enter Correct Adress");
>>>>>>> 984a89dc2c9b08caad1e6b1072e6a4dc73ad5051
        }
      });
  }

  return (
<<<<<<< HEAD
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
=======
    <>
      {user !== false ? (
        <>
          <div class="alert alert-primary" role="alert">
            Please add your home location
          </div>
          <MapboxAutocomplete
            publicKey="pk.eyJ1IjoibWV6aWFuZiIsImEiOiJja3VuaXQ5amIwc3NtMnZveGdxYTlvc2pwIn0.I1lxuVnFGDG7nfq_42VDdQ"
            inputClass="form-control search"
            onSuggestionSelect={suggestionSelect}
            country="us"
            resetSearch={false}
          />

          <button className="dashbtn" onClick={handleLocation}>
            {" "}
            Next
          </button>
          {id_location != null ? <AddHome id={id_location} /> : <></>}
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
>>>>>>> 984a89dc2c9b08caad1e6b1072e6a4dc73ad5051
  );
}
