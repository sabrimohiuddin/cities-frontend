import { Link } from "react-router-dom";

export default function NavBar() {
  return (

    <div>
      <nav>
        <h1>
          <Link to="/cities">Cities</Link>
        </h1>   
          <Link to="/cities/new">New City</Link>
      </nav>
    </div>

  );
}





