import React, { useState } from "react";
import { Redirect, withRouter } from "react-router";
import { Link } from "react-router-dom";
import "../App.css";
import Logout from "./ownerDashbord/Logout";

function Login({ open, loginBoxOpen, history }) {
  const [login, setlogin] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [signup, setSignup] = useState(false);
  const [owner, setOwner] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, password }),
    })
      .then((response) => response.json())
      .then((owner) => {
        setIsLoading(false);
        if (owner.id) {
          setRedirect(true);
          setOwner(owner.id);
          history.replace("/dashbord", owner.id);
        } else {
          setErrors(owner.errors[0]);
        }
      });
  }

  return !open ? (
    <div className="divmodal">
      <section className="vh-100" style={{ backgroundcolor: "#508bfc" }}>
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

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>

                  {errors ? <p style={{ color: "red" }}>{errors}</p> : <></>}
                  <h6>Don't have an account ?</h6>
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    onClick={() => setSignup(true)}
                  >
                    {" "}
                    Sign-up
                  </button>

                  {redirect ? loginBoxOpen : <></>}
                  {signup ? <Redirect to="/signup" /> : <></>}
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
export default withRouter(Login);
