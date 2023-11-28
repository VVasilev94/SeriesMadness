import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">SeriesMadness</Link>
      </h1>
      <nav>
        <Link to="/series">SeriesCollection</Link>
        <div id="user">
          <Link to="/series/create">Add New Series</Link>
          <Link to="/logout">Logout</Link>
        </div>

        <div id="guest">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </header>
  );
}
