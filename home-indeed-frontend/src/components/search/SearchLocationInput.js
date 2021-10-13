import { useState, useEffect } from "react";
import MapboxAutocomplete from "react-mapbox-autocomplete";

export default function SearchLocationInput() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  function suggestionSelect(result, lat, lng, text) {
    setSearch((result, lat, lng, text).toLowerCase().split(" ")[0]);
  }

  const handleSeach = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      fetch("/search/philadelphia")
        .then((response) => response.json())
        .then((home) => {
          setResult(home);
        });
    }
  };
  console.log(result);
  return (
    <>
      <MapboxAutocomplete
        publicKey="pk.eyJ1IjoibWV6aWFuZiIsImEiOiJja3VuaXQ5amIwc3NtMnZveGdxYTlvc2pwIn0.I1lxuVnFGDG7nfq_42VDdQ"
        inputClass="form-control search"
        onSuggestionSelect={suggestionSelect}
        country="us"
        resetSearch={false}
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        onClick={(e) => handleSeach(e)}
      >
        Search
      </button>
    </>
  );
}
