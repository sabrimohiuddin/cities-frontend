import { Link } from "react-router-dom";

function City({ city }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
    <img src={city.image} className="card-img-top" alt={`${city.city} Image`} />
    <div className="card-body">
      <h4 className="card-title">{city.city}</h4>
      <p className="card-title">
          {city.has_visited ? (
            <span>Visited ✅</span>
            ) : (
              null
              )}
      </p>
      <h6>{city.country}</h6>
      <p className="card-text">Average Ticket Price: ${city.ticket_price.toFixed(2)}</p>
      <Link className="btn btn-primary" to={`/cities/${city.id}`}>View Comments</Link>
    </div>
  </div>
  );
}

export default City;

