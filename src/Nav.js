import React from "react";
import { Link } from "react-router-dom";
import './index.css'

function Nav() {
  return (
    <div className="nav">
      <header>
        <Link className="headerLink" to="/">
          <h1>Noteful</h1>
        </Link>
      </header>
    </div>
  );
}

export default Nav;
