import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header>
           <h1><Link to="/">SeriesMadness</Link></h1>
           <nav>
            <Link to="#">All series</Link>
            <div id="user">
               <Link to="#">Add New Series</Link>
               <Link to="#">Logout</Link>
            </div>
              
            <div id="guest">
            <Link to="#">Login</Link>
            <Link to="#">Register</Link>
            </div>
           </nav>
        </header>
    );
}