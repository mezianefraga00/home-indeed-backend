import React, { useEffect, useState } from "react";
import "../../App.css";

export default function Requests({ id }) {
  const [msg, setMsg] = useState([]);
  const [request, setRequest] = useState(true);
  const client = () => {
    fetch("/requesclient/" + id).then((r) => {
      if (r.ok) {
        r.json().then((message) => setMsg(message));
      } else setRequest(false);
    });
  };
  useEffect(() => {
    if (id != null) {
      client();
    }
  }, [id]);
  return (
    <div>
      <>
        {request ? (
          <>
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
          </>
        ) : (
          <p>No new request</p>
        )}
      </>
    </div>
  );
}
