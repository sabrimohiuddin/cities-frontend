import axios from "axios";
import { useState, useEffect } from "react";
import City from "./City"; 

const API = process.env.REACT_APP_API_URL;

function Cities() {
  const [cities, setCities] = useState([]);
  const [averageHotelPrice, setAverageHotelPrice] = useState(0);


  useEffect(() => {
    axios
      .get(`${API}/cities`)
      .then((response) => {setCities(response.data);
      const sum = response.data.reduce((accumulator, city) =>{
        return accumulator + city.ticket_price;
      },0)
      const average = sum / response.data.length
      setAverageHotelPrice(average)})
      .catch((error) => console.warn("Error fetching cities:", error));
  }, []);

  return (
    <div className="Cities">
      <h1>Total Cities: {cities.length}</h1>
      <h2>Average Hotel Price: ${averageHotelPrice.toFixed(2)}</h2>
      <tbody className="grid-container">
        {cities.map((city) => {
          return <City key={city.id} city={city} />;
        })}
      </tbody>
    </div>
  );
}

export default Cities;
