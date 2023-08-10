import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/cities">Cities</Link>
      </h1>
      <button>
        <Link to="/cities/new">New City</Link>
      </button>
    </nav>
  );
}





