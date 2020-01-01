import React from "react";
import { Link } from "react-router-dom";


function Nav() {
  return (
    <div className="headerLink">
      <Link to="/">
        <header>
          <h1>NoteFul</h1>
        </header>
      </Link>
    </div>
  );
}

export default Nav;
