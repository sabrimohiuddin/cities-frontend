import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Comments from "./Comments";
const API = process.env.REACT_APP_API_URL;

function CityDetails() {
  const [city, setCity] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  const handleDelete = () => {
    deleteCity();
  };

  useEffect(() => {
    axios.get(`${API}/cities/${id}`).then((response) => {
      setCity(response.data);
    });
  }, [id, navigate, API]);

  const deleteCity = () => {
    axios
      .delete(`${API}/cities/${id}`)
      .then(() => {
        navigate(`/cities`);
      })
      .catch((error) => {
        console.error("Error deleting city:", error);
      });
  };

  return (
    <>
      <article>
        <h3>
          {city.has_visited ? <span>✅</span> : null} {city.city}
        </h3>
        <h5>
          {city.country} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Ticket Price: ${city.ticket_price}
        </h5>
        <img src={city.image} alt={`${city.city} Image`} />
        <div className="showNavigation">
          <div>
            <Link to={`/cities`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/cities/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
      {/* <Comments /> */}
    </>
  );
}

export default CityDetails;