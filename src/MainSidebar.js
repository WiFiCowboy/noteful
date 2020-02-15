import React, { Component } from "react";
import "./index.css";
import { NavLink, Link } from "react-router-dom";
import NoteFulContext from "./context/NoteFulContext";


export default class MainSidebar extends Component {
  static contextType = NoteFulContext;

  render() {
    const { folders = [] } = this.context;
    return (
      <div className="mainSidebar">
        <h2>
          {folders.map(folder => (
            <li key={folder.id}>
              <NavLink to={"/folder/" + folder.id}>
              {folder.name}
              </NavLink>
            </li>
          ))}
        </h2>

        <Link to="/addFolder">Add Folder</Link>
      </div>
    );
  }
}
