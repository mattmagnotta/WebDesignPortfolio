import React from "react";
//Components
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";


//Routing
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//responsive

function NavBar() {
  return (
    <div>
      <ul id="navBar">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/skills">
            My Skills
          </Link>
        </li>
        <li>
          <Link className="link" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default NavBar;
