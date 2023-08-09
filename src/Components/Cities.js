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
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Country</th>
              <th>Image</th>
              <th>Visited</th>
              <th>Ticket Price</th>
              <th>View Comments</th>
            </tr>
          </thead>
          <tbody>
            {cities.map((city) => {
              return <City key={city.id} city={city} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Cities;
