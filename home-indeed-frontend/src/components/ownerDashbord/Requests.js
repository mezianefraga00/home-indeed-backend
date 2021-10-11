import React, { useEffect, useState } from "react";
import "../../App.css";

export default function Requests({ id }) {
  console.log(id);
  const [msg, setMsg] = useState([]);
  const client = () => {
    fetch("/requesclient/" + id)
      .then((response) => response.json())
      .then((home) => {
        setMsg(home);
      });
  };
  useEffect(() => {
    if (id != null) {
      client();
    }
  }, [id]);
  console.log(msg);
  return (
    <div>
      {msg.map((home, key) => (
        <div className="alert alert-info" role="alert">
          <img
            className="imgdash"
            src={"/" + home.home.img_url + ".jpg"}
            alt="home page"
          ></img>
          <h1>{home.message}</h1>
          <h3>{home.date_request}</h3>
          <h3>{home.name}</h3>
          <h3>{home.phone_nbr}</h3>
        </div>
      ))}
    </div>
  );
}
