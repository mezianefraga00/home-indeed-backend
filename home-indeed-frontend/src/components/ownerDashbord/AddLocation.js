import React, { useEffect, useState } from "react";
import "../../App.css";

import AddHome from "./AddHome";
import MapboxAutocomplete from "react-mapbox-autocomplete";

export default function AddLocation() {
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
          r.json().then((err) => setErrors(err.errors));
        }
      });
  }

  return (
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
  );
}
