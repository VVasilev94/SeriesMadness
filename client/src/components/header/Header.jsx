import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-section">

      <div className="container">

          <div className="logo-wrapper">
            <Link to="/">SeriesMadness</Link>
          </div>

          <div className="navigation-wrapper"> 

            <nav className="navigation-container">
              <div className="dashboard-wrapper">
                <Link to="/series">SeriesCollection</Link>
              </div>

              <div className="user-wrapper">
                <Link to="/series/create">Add New Series</Link>
                <Link to="/logout">Logout</Link>
              </div>

              <div className="guest-wrapper">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>

            </nav>

          </div>
      </div>
    </header>
  );
}
