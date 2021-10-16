import React, { useEffect, useState } from "react";
import "../App.css";
import Navbar from "./Navbar";
import NewRequest from "./allrequests/NewRequest";
export default function Buy() {
  const [homes, setHomes] = useState([]);
  const [rentId, setRentId] = useState(null);
  useEffect(() => {
    fetch("/showSell")
      .then((response) => response.json())
      .then((home) => {
        setHomes(home);
      });
  }, []);
  const getHomeID = (id) => {
    setRentId(id);
  };
  return (
    <>
      <Navbar />
      <h1 className="text-align: center">Find your next home on Home Indeed</h1>
      <div className="containerannoce">
        <div className="row">
          {homes.map((home, key) => (
            <div className="col-md-4">
              <div className="carbon-example flex-wrapper">
                <img
                  className="imgdash"
                  src={"/" + home.img_url + ".jpg"}
                  alt="home page"
                ></img>
                <div className="home-info">
                  <h3>{"$" + home.price}</h3>
                  <h4>
                    {home.nbr_bedroom} ba {home.nbr_bathroom} ba {home.surface}{" "}
                    sqft
                  </h4>
                  <p>{home.location.adress}&nbsp;</p>
                </div>
                <NewRequest
                  id={rentId ? rentId : home.id}
                  getHomeID={getHomeID}
                />
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
