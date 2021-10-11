import React, { useEffect, useState } from "react";

import "../../App.css";
import { useLocation } from "react-router";
export default function DeleteHome() {
  const [value, setConfirm] = useState();
  const owner_id = 1;
  const [myhomes, setHomes] = useState([]);

  useEffect(() => {
    fetch("/myhomes/" + owner_id)
      .then((response) => response.json())
      .then((home) => {
        setHomes(home);
      });
  }, []);
  function handleDelete(id) {
    fetch(`/homes/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        console.log("homedeleted");
      }
    });
  }
  return (
    <div>
      <ul className="list-group list-group-flush">
        {myhomes.map((home, key) => (
          <>
            <li className="list-group-item" key={home.id}>
              <img
                className="imgdash"
                src={"/" + home.img_url + ".jpg"}
                alt="home page"
              ></img>
            </li>

            <li className="list-group-item" key={"loc" + home.id}>
              <p>
                {home.location.street}&nbsp;
                {home.location.city}&nbsp;
                {home.location.state}&nbsp;
                {home.location.zipcode}&nbsp;
              </p>
            </li>
            <button
              type="button"
              onClick={() => setConfirm(home.id)}
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Launch demo modal
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">...</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => handleDelete(value)}
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}

        <br />
      </ul>
    </div>
  );
}
