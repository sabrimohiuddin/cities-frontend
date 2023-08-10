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
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">City:</label>
        <input
          id="city"
          value={city.city}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of City"
          required
        />
        <label htmlFor="country">Country:</label>
        <input
          id="country"
          type="text"
          value={city.country}
          placeholder="Country of City"
          onChange={handleTextChange}
        />
        <label htmlFor="image">Image URL:</label>
        <input
          id="image"
          type="text"
          value={city.image}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="ticket_price">Ticket Price:</label>
        <input
          id="ticket_price"
          type="number"
          step="0.01"
          value={city.ticket_price}
          placeholder="Ticket Price"
          onChange={handleTextChange}
        />
        <label htmlFor="has_visited">Visited:</label>
        <input
          id="has_visited"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={city.has_visited}
        />

        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default CityNewForm;
