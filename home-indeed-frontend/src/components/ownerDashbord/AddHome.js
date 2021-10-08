import React, { useState } from "react";
import "../../App.css";
export default function AddHome() {
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
  const [img_url, setImg] = useState("");
  const [nbr_bedroom, setBed] = useState("");
  const [nbr_bathroom, setBath] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDesct] = useState("");

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZip] = useState("");
  const [app_nbr, setApp] = useState("");

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
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
        img_url,
        nbr_bedroom,
        nbr_bathroom,
        price,
        description,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (!r.ok) {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <>
      <form className="dashform">
        <div class="form-group">
          <label for="exampleFormControlInput1">Home Type</label>
          <select
            class="form-control"
            id="deal_type"
            value={deal_type}
            onChange={(e) => setDeal(e.target.value)}
          >
            <option>Rent</option>
            <option>Buy</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Home Type</label>
          <select
            class="form-control"
            id="home_type"
            value={home_type}
            onChange={(e) => setHome(e.target.value)}
          >
            <option>TownHome</option>
            <option>Single Familly Home</option>
            <option>Appartement/Condo/Loft</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">surface</label>
          <input
            type="surface"
            class="form-control"
            id="surface"
            value={surface}
            placeholder="sqft"
            onChange={(e) => setSurface(e.target.value)}
          ></input>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Parking</label>
          <select
            class="form-control"
            id="parking"
            id={parking}
            onChange={(e) => setPark(e.target.value)}
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">heating</label>
          <select
            class="form-control"
            id="heating"
            value={heating}
            onChange={(e) => setHeat(e.target.value)}
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">backyard</label>
          <select
            class="form-control"
            id="backyard"
            value={backyard}
            onChange={(e) => setBack(e.target.value)}
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">dishawasher</label>
          <select
            class="form-control"
            id="dishwasher"
            value={dishawasher}
            onChange={(e) => setDish(e.target.value)}
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">laundry</label>
          <select
            class="form-control"
            id="laundry"
            value={laundry}
            onChange={(e) => setLaun(e.target.value)}
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">cooling</label>
          <select
            class="form-control"
            id="cooling"
            value={cooling}
            onChange={(e) => setCool(e.target.value)}
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">pets_allowed</label>
          <select
            class="form-control"
            id="pet_allowed"
            value={pets_allowed}
            onChange={(e) => setPet(e.target.value)}
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">nbr_bedroom</label>
          <input
            type="integer"
            class="form-control"
            id="nbr_bedroom"
            value={nbr_bedroom}
            onChange={(e) => setBed(e.target.value)}
            placeholder="3"
          ></input>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">nbr_bathroom</label>
          <input
            type="integer"
            class="form-control"
            id="nbr_bathroom"
            value={nbr_bathroom}
            onChange={(e) => setBath(e.target.value)}
            placeholder="1"
          ></input>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">price</label>
          <input
            type="integer"
            class="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="2300"
          ></input>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">description</label>
          <input
            type="text"
            class="form-control"
            id="description"
            value={description}
            onChange={(e) => setDesct(e.target.value)}
            placeholder="..."
          ></input>
        </div>
        <div>
          <label for="exampleFormControlInput1">Add picture</label>
          <input
            type="file"
            value={img_url}
            onChange={(e) => setImg(e.target.files[0])}
          />
          &nbsp;
        </div>
      </form>
      <h2>Adress</h2>
      <form className="dashform">
        <div class="form-group">
          <label for="inputAddress">Appartement Number</label>
          <input
            type="integer"
            class="form-control"
            id="app_nbr"
            value={app_nbr}
            onChange={(e) => setApp(e.target.value)}
            placeholder="114"
          ></input>
        </div>
        <div class="form-group">
          <label for="inputAddress">Street</label>
          <input
            type="text"
            class="form-control"
            id="adress"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="Amstrong ave"
          ></input>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input
              type="text"
              class="form-control"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Brooklyn"
            ></input>
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <input
              type="string"
              class="form-control"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="NY"
            ></input>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input
              type="integer"
              class="form-control"
              id="zipcode"
              value={zipcode}
              onChange={(e) => setZip(e.target.value)}
              placeholder="10301"
            ></input>
          </div>
        </div>
      </form>
      <button className="dashbtn"> Create New Home</button>
    </>
  );
}
