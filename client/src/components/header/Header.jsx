import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import SearchBar from "../searchBar/SearchBar";
import About from "../about/About";

export default function Header() {
  const { isAuthenticated, username } = useContext(AuthContext);

  return (
    <header
      className={`header-section ${
        isAuthenticated ? "logged-in" : "logged-out"
      }`}
    >
      <div className="container">
        <div className="logo-wrapper">
          <Link to="/">SeriesMadness</Link>
        </div>

        <div>
          <SearchBar />
        </div>

        <div className="navigation-wrapper">
          <nav className="navigation-container">
            <div className="dashboard-wrapper">
              <Link to="/series">All series</Link>
            </div>
            {isAuthenticated && (
              <div className="user-wrapper">
                <Link to="/series/create">Add New Series</Link>
              </div>
            )}

            <div>
              <Link to="/about">About</Link>
            </div>

            {isAuthenticated && (
              <div className="user-wrapper">
                <Link to="/logout">Logout</Link>
                <span>| {username}</span>
              </div>
            )}
            {!isAuthenticated && (
              <div className="guest-wrapper">
                <Link to="/login">Login</Link>
              </div>
            )}
            {!isAuthenticated && (
              <div className="guest-wrapper">
                <Link to="/register">Register</Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
