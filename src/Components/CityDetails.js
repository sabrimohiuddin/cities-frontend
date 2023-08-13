import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Comments from "./Comments";
const API = process.env.REACT_APP_API_URL;

function CityDetails() {
  const [city, setCity] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  // const handleDelete = () => {
  //   deleteCity();
  // };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this city?")) {
        deleteCity();
    }
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
        <h3>{city.city},&nbsp;<small>{city.country}</small></h3>
        <h6>
          Hotel Price: ${city.ticket_price}
        </h6>
      <article>
        <img className="cityimage" src={city.image} alt={`${city.city} Image`} />
      </article>
        <div className="showNavigation">
          <div>
            <Link to={`/cities`}>
              <button className="btn btn-success">Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/cities/${id}/edit`}>
              <button className="btn btn-warning" >Edit</button>
            </Link>
          </div>
          <div>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      <Comments />
    </>
  );
}

export default CityDetails;

