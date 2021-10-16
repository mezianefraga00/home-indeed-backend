import React, { useEffect, useState } from "react";
import "../../App.css";
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
  const [id_location, setIdLocation] = useState(null);

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [adress, setSearch] = useState([]);
  function suggestionSelect(result, lat, lng, text) {
    setSearch(result);
  }

  function handleLocation(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        adress,
      }),
    })
      .then((response) => response.json())
      .then((r) => {
        setIsLoading(false);
        setIdLocation(r.id);
        if (!r.id) {
          setErrors("Enter Correct Adress");
        }
      });
  }

  return (
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
  );
}
