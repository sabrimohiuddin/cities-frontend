import { Link } from "react-router-dom";

function City({ city }) {
  return (
    <tr>
      <td>
        {city.has_visited ? (
          <span>✅</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>{city.city}</td>
      <td>
        <img src={city.image} alt={`${city.city} Image`} />
      </td>
      <td>{city.country}</td>
      <td>${city.ticket_price.toFixed(2)}</td>
      <td>
        <Link to={`/cities/${city.id}`}>View Comments</Link>
      </td>
    </tr>
  );
}

export default City;
