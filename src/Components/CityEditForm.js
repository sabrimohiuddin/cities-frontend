import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function CityEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [city, setCity] = useState({
    city: "",
    country: "",
    image: "",
    has_visited: false,
    ticket_price: 0,
  });

  const updateCity = (updatedCity) => {
    axios
      .put(`${API}/cities/${id}`, updatedCity)
      .then(
        () => {
          navigate(`/cities/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((error) => {
        console.warn("Error updating city:", error);
      });
  };

  const handleTextChange = (event) => {
    setCity({ ...city, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setCity({ ...city, has_visited: !city.has_visited });
  };

  useEffect(() => {
    axios.get(`${API}/cities/${id}`).then(
      (response) => setCity(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCity(city, id);
  };

  return (
    <div className="text-box">

<form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="city"> </label>
    <input 
        type="text" 
        value={city.city}
        className="form-control shorter-input" 
        id="city" 
        aria-describedby="cityHelp"
        onChange={handleTextChange} 
        placeholder="Enter City"
        required 
        />
  </div>

  <div className="form-group">
    <label htmlFor="country"> </label>
    <input 
        type="text" 
        value={city.country}
        className="form-control" 
        id="country" 
        aria-describedby="countryHelp"
        onChange={handleTextChange} 
        placeholder="Enter Country"
        />
  </div>

  <div className="form-group">
    <label htmlFor="image"> </label>
    <input 
        type="text" 
        value={city.image}
        className="form-control" 
        id="image" 
        aria-describedby="imageHelp"
        onChange={handleTextChange} 
        placeholder="Enter Image URL"
        />
  </div>

  <div className="form-group">
    <label htmlFor="ticket_price"> </label>
    <input 
        type="number" 
        value={city.ticket_price}
        className="form-control" 
        id="ticket_price" 
        aria-describedby="ticket_cityHelp"
        onChange={handleTextChange}
        step="0.01" 
        placeholder="Enter Hotel Room Average Price"
        />
  </div>

  <div className="form-check">
    <input 
        id="has_visited"
        type="checkbox" 
        onChange={handleCheckboxChange} 
        // className="form-check-input"
        checked={city.has_visited} 
        />
    <label className="form-check-label" for="exampleCheck1">Visited</label>
  </div>

  <div className="button-container">
      <button type="submit" className="btn btn-primary">Submit</button>

      <Link to={`/cities`} >
            <button className="btn btn-outline-secondary">Nevermind!</button>
      </Link>
  </div>


</form>
    </div> 
  );
}

export default CityEditForm;
