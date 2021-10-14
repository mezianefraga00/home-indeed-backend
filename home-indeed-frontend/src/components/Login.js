import React, { useState } from "react";
import { Redirect } from "react-router";
import "../App.css";

export default function Login({ open, loginBoxOpen }) {
  const [login, setlogin] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setRedirect(true));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return !open ? (
    <div classNameName="divmodal">
      <section className="vh-100" style={{ backgroundcolor: +"#508bfc" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderradius: 1 + "rem" }}
              >
                <button className="btn btn-light" onClick={loginBoxOpen}>
                  Close X
                </button>

                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="login"
                      value={login}
                      onChange={(e) => setlogin(e.target.value)}
                    />
                    <label className="form-label" htmlFor="login">
                      login
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="input"
                      className="form-control form-control-lg"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="form-label" htmlFor="typePasswordX">
                      Password
                    </label>
                  </div>

                  <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      Remember password
                    </label>
                  </div>
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ) : (
    <div></div>
  );
}
