import { useState, useEffect } from "react";
import MapboxAutocomplete from "react-mapbox-autocomplete";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

export default function SearchLocationInput() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState();
  const [redir, setRedirect] = useState(false);
  function suggestionSelect(result, lat, lng, text) {
    setSearch((result, lat, lng, text).toLowerCase().split(" ")[0]);
  }

  const handleSeach = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      fetch("/search/" + search)
        .then((response) => response.json())
        .then((home) => {
          setResult(home);
          setRedirect(true);
        });
    }
  };

  return (
    <>
      <div>
        {redir ? (
          <Redirect
            to={{
              pathname: "/searchresult",
              state: { message: result },
            }}
          />
        ) : (
          <></>
        )}
        <div className="searchInput">
          <MapboxAutocomplete
            publicKey="pk.eyJ1IjoibWV6aWFuZiIsImEiOiJja3VuaXQ5amIwc3NtMnZveGdxYTlvc2pwIn0.I1lxuVnFGDG7nfq_42VDdQ"
            inputClass="form-control search"
            onSuggestionSelect={suggestionSelect}
            country="us"
            resetSearch={false}
          />
        </div>
        <div className="searchInput">
          <button className="btn btn-outline-success" onClick={handleSeach}>
            Search
          </button>
        </div>
      </div>
    </>
  );
}
