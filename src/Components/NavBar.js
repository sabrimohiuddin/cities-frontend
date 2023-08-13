import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <h1>
            <Link to="/cities" className="navbar-link">
              Cities
            </Link>
          </h1>
          <div>
            <Link to="/cities/new" className="navbar-button">
              New City
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}





