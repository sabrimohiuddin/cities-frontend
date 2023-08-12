import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function CityNewForm() {
  let navigate = useNavigate();

  const addCity = (newCity) => {
    axios
      .post(`${API}/cities`, newCity)
      .then(
        () => {
          navigate(`/cities`);
        },
        (error) => console.error(error)
      )
      .catch((error) => {
        console.warn("Error adding city:", error);
      });
  };

  const [city, setCity] = useState({
    city: "",
    country: "",
    image: "",
    has_visited: false,
    ticket_price: 0,
  });

  const handleTextChange = (event) => {
    setCity({ ...city, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setCity({ ...city, has_visited: !city.has_visited });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCity(city);
  };

  return (
    <div className="New form-group row text-box">
      <form onSubmit={handleSubmit}>

      <div class="form-group row">
        <label htmlFor="inputEmail3" class="col-sm-2 col-form-label">City</label>
        <div class="col-sm-10">
          <input 
              type="text" 
              class="form-control" 
              id="city" 
              value={city.city} 
              placeholder="Enter City" 
              onChange={handleTextChange}
              required  />
        </div>
      </div>

      <div class="form-group row">
        <label htmlFor="inputcountry3" class="col-sm-2 col-form-label">Country</label>
        <div class="col-sm-10">
          <input 
              type="text" 
              class="form-control" 
              id="country" 
              placeholder="Enter Country" 
              onChange={handleTextChange} 
              value={city.country}
              required />
        </div>
      </div>

      <div class="form-group row">
        <label htmlFor="inputEmail3" class="col-sm-2 col-form-label">Image URL</label>
        <div class="col-sm-10">
          <input 
                type="text" 
                class="form-control" 
                id="image" 
                placeholder="http://" 
                onChange={handleTextChange} 
                value={city.image}
                required />
        </div>
      </div>

      <div class="form-group row">
        <label htmlFor="inputEmail3" class="col-sm-2 col-form-label">Hotel Average Price</label>
        <div class="col-sm-10">
            <input 
                type="number" 
                class="form-control" 
                step="0.01" 
                id="ticket_price" 
                placeholder="Enter Hotel Room Price" 
                onChange={handleTextChange} 
                value={city.ticket_price}
                 />
        </div>
      </div>

      <div class="form-group row">
        <div class="col-sm-2"></div>
        <div class="col-sm-10">
          <div class="form-check">
            <input 
                class="form-check-input" 
                type="checkbox" 
                id="has_visited" 
                onChange={handleCheckboxChange} 
                checked={city.has_visited} />
            <label class="form-check-label" for="gridCheck1">
              Visited
            </label>
          </div>
      </div>
  </div>

      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
</form>


    </div>
  );
}

export default CityNewForm;
