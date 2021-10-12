import { useState } from "react";
import MapboxAutocomplete from "react-mapbox-autocomplete";

export default function SearchLocationInput() {
  const [search, setSearch] = useState([]);
  function suggestionSelect(result, lat, lng, text) {
    setSearch(result);
  }
  console.log(search);
  return (
    <MapboxAutocomplete
      publicKey="pk.eyJ1IjoibWV6aWFuZiIsImEiOiJja3VuaXQ5amIwc3NtMnZveGdxYTlvc2pwIn0.I1lxuVnFGDG7nfq_42VDdQ"
      inputClass="form-control search"
      onSuggestionSelect={suggestionSelect}
      country="us"
      resetSearch={false}
    />
  );
}
