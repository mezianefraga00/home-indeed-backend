import React, { useEffect, useState } from "react";
import "../../App.css";

export default function NewRequest({ id }) {
  const [request, setRequest] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phone_nbr, setphone_nbr] = useState("");
  const [email, setemail] = useState("");
  const [home_id, setId] = useState();
  const [change, setChange] = useState(true);
  const date_request = new Date().toLocaleString();

  const Myfunction = (e) => {
    if (change) {
      e.preventDefault();
      setId(id);
      setChange(false);
    }
  };

  console.log(home_id);
  console.log(id);
  const handleNewRequest = (e) => {
    e.preventDefault();

    fetch("/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        home_id,
        phone_nbr,
        email,
        date_request,
        message,
        name,
      }),
    })
      .then((response) => response.json())
      .then((home) => {
        setRequest(home);
      });
  };

  return (
    <>
      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={(e) => Myfunction(e)}
        >
          Request more Info
        </button>
      </div>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="form-group col-md-6">
                <label htmlFor="exampleFormControlInput1">Name</label>
                <input
                  type="integer"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=".."
                ></input>
              </div>
            </div>

            <div class="modal-body">
              <div className="form-group col-md-6">
                <label htmlFor="exampleFormControlInput1">phone_nbr</label>
                <input
                  type="integer"
                  className="form-control"
                  id="name"
                  value={phone_nbr}
                  onChange={(e) => setphone_nbr(e.target.value)}
                  placeholder=".."
                ></input>
              </div>
            </div>

            <div class="modal-body">
              <div className="form-group col-md-6">
                <label htmlFor="exampleFormControlInput1">email</label>
                <input
                  type="integer"
                  className="form-control"
                  id="name"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  placeholder=".."
                ></input>
              </div>
            </div>

            <div class="modal-body">
              <div className="form-group col-md-6">
                <label htmlFor="exampleFormControlInput1">message</label>
                <input
                  type="integer"
                  className="form-control"
                  id="name"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder=".."
                ></input>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => console.log(home_id)}
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleNewRequest}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
