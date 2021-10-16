import React, { useState, useEffect } from "react";
import { Redirect, withRouter } from "react-router-dom";
import "../../App.css";

function AddHome(location) {
  const [home_type, setHome] = useState("");
  const [surface, setSurface] = useState("");
  const [parking, setPark] = useState("");
  const [heating, setHeat] = useState("");
  const [backyard, setBack] = useState("");
  const [laundry, setLaun] = useState("");
  const [dishawasher, setDish] = useState("");
  const [cooling, setCool] = useState("");
  const [deal_type, setDeal] = useState("");
  const [pets_allowed, setPet] = useState("");
  const [nbr_bedroom, setBed] = useState("");
  const [nbr_bathroom, setBath] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDesct] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [redir, setRedirect] = useState(false);
  const [user, setUser] = useState(null);
  const [owner_id, setUsername] = useState("");
  let location_id = location.id;

  // ...
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      r.ok ? r.json() : setUser(false);
    });
  }, []);

  useEffect(() => {
    fetch("/me")
      .then((response) => response.json())
      .then((user) => {
        setUsername(user.id);
      });
  }, []);
  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    if (location_id != null) {
      fetch("/homes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          home_type,
          surface,
          parking,
          heating,
          backyard,
          laundry,
          dishawasher,
          cooling,
          deal_type,
          pets_allowed,
          nbr_bedroom,
          nbr_bathroom,
          price,
          description,
          owner_id,
          location_id,
        }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          setRedirect(true);
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
  }
  return (
    <>
      {user !== false ? (
        <form className="dashform">
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlInput1">Home Type</label>
            <select
              className="form-control"
              id="deal_type"
              value={deal_type}
              onChange={(e) => setDeal(e.target.value)}
            >
              <option>Rent</option>
              <option>Buy</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlInput1">Home Type</label>
            <select
              className="form-control"
              id="home_type"
              value={home_type}
              onChange={(e) => setHome(e.target.value)}
            >
              <option>TownHome</option>
              <option>Single Familly Home</option>
              <option>Appartement/Condo/Loft</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlInput1">surface</label>
            <input
              type="surface"
              className="form-control"
              id="surface"
              value={surface}
              placeholder="sqft"
              onChange={(e) => setSurface(e.target.value)}
            ></input>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlInput1">Parking</label>
            <select
              className="form-control"
              id="parking"
              id={parking}
              onChange={(e) => setPark(e.target.value)}
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlInput1">heating</label>
            <select
              className="form-control"
              id="heating"
              value={heating}
              onChange={(e) => setHeat(e.target.value)}
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlInput1">backyard</label>
            <select
              className="form-control"
              id="backyard"
              value={backyard}
              onChange={(e) => setBack(e.target.value)}
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlInput1">dishawasher</label>
            <select
              className="form-control"
              id="dishwasher"
              value={dishawasher}
              onChange={(e) => setDish(e.target.value)}
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlInput1">laundry</label>
            <select
              className="form-control"
              id="laundry"
              value={laundry}
              onChange={(e) => setLaun(e.target.value)}
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlInput1">cooling</label>
            <select
              className="form-control"
              id="cooling"
              value={cooling}
              onChange={(e) => setCool(e.target.value)}
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlInput1">pets_allowed</label>
            <select
              className="form-control"
              id="pet_allowed"
              value={pets_allowed}
              onChange={(e) => setPet(e.target.value)}
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlInput1">nbr_bedroom</label>
            <input
              type="integer"
              className="form-control"
              id="nbr_bedroom"
              value={nbr_bedroom}
              onChange={(e) => setBed(e.target.value)}
              placeholder="3"
            ></input>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlInput1">nbr_bathroom</label>
            <input
              type="integer"
              className="form-control"
              id="nbr_bathroom"
              value={nbr_bathroom}
              onChange={(e) => setBath(e.target.value)}
              placeholder="1"
            ></input>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlInput1">price</label>
            <input
              type="integer"
              className="form-control"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="2300"
            ></input>
          </div>
          <div className="form-group col-sm-3 col-md-6 col-lg-4">
            <label htmlFor="exampleFormControlInput1">description</label>
            <textarea
              className="form-control"
              id="description"
              value={description}
              onChange={(e) => setDesct(e.target.value)}
              placeholder="..."
              rows="3"
            ></textarea>
          </div>

          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      ) : (
        <Redirect to="/" />
      )}
      {redir ? (
        <Redirect
          to={{
            pathname: "/dashbord",
            state: { message: "success" },
          }}
        />
      ) : (
        <>{<p>{errors}</p>}</>
      )}
    </>
  );
}
export default withRouter(AddHome);
