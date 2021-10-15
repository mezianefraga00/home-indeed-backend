import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import "../../App.css";

export default function DeleteHome() {
  const [value, setConfirm] = useState();
  const owner_id = 2;
  const [myhomes, setHomes] = useState([]);
  const [response, setErros] = useState("");

  useEffect(() => {
    fetch("/myhomes/" + owner_id)
      .then((response) => response.json())
      .then((home) => {
        setHomes(home);
      });
  }, []);
  function handleDelete(id) {
    const origialListsHomes = [...myhomes];
    const homes = origialListsHomes.filter((h) => h.id !== id);

    fetch(`/homes/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((res) => {
        setHomes(homes);
        setErros((response) => [...response, res]);
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
              <h3>Adress</h3>
              <p>{home.location.address}&nbsp;</p>
            </li>
            <li className="list-group-item" key={"del" + home.id}>
              <button
                type="button"
                onClick={() => setConfirm(home.id)}
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Delete Home
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
                        Alert
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      Would you like to delete this home permanently
                    </div>
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
                        data-bs-dismiss="modal"
                        onClick={() => handleDelete(value)}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </>
        ))}

        <br />
      </ul>
    </div>
  );
}
