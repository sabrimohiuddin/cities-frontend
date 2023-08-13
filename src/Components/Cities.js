import axios from "axios";
import { useState, useEffect } from "react";
import City from "./City"; 

const API = process.env.REACT_APP_API_URL;

function Cities() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/cities`)
      .then((response) => setCities(response.data))
      .catch((error) => console.warn("Error fetching cities:", error));
  }, []);

  return (
    <div className="Cities">
      <h1>{cities.length}</h1>
      <tbody className="grid-container">
        {cities.map((city) => {
          return <City key={city.id} city={city} />;
        })}
      </tbody>
    </div>
  );
}

export default Cities;
