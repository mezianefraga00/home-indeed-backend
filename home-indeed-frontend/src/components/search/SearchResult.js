import React, { useState } from "react";
import NewRequest from "../allrequests/NewRequest";
import Navbar from "../Navbar";
import "../../App.css";
import SearchLocationInput from "./SearchLocationInput";
function SearchResult(search) {
  const [rentId, setRentId] = useState(null);

  const home = [...search.location.state.message];
  console.log(home);
  const getHomeID = (id) => {
    setRentId(id);
  };
  console.log(home.length);
  return (
    <>
      <Navbar />

      {home.map((home, key) => (
        <div className="col-md-4">
          <div className="carbon-example flex-wrapper">
            <img
              className="imgdash"
              src={"/" + home.img_url + ".jpg"}
              alt="home page"
            ></img>
            <div className="home-info">
              <h3>{"$" + home.price + "/mo"}</h3>
              <h4>
                {home.nbr_bedroom} ba {home.nbr_bathroom} ba {home.surface} sqft
              </h4>
              <p>{home.location.adress}&nbsp;</p>
            </div>
            <NewRequest id={rentId ? rentId : home.id} getHomeID={getHomeID} />
          </div>
          <br />
        </div>
      ))}
      {home.length == 0 ? (
        <>
          <h1>Result Not found</h1>
          <img className="sadface" src="/sad.jpg" alt="No result found"></img>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
export default SearchResult;
