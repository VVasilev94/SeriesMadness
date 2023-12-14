import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css'
import { FaInstagram, FaLinkedin, FaGoogle } from 'react-icons/fa';


export default function Footer() {
    return(
        <footer>
      <div className="footer-content">
        <h3>Series Madness</h3>
        <p>
          Made with <span className="heart">&#10084;</span> by Vasil
        </p>
        <ul className="socials">
          <li>
            <a href="#">
              <FaGoogle size={30} color="#DB4437" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin size={30} color="#0077B5" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy; <a href="/">Series Madness</a>{" "}
        </p>
        <div className="footer-menu">
          <ul className="f-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    )
}