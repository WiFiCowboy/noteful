import React, { Component } from "react";
import "./index.css";
import { NavLink, useHistory, Link } from "react-router-dom";
import NoteFulContext from "./context/NoteFulContext";
import AddFolder from "./AddFolder";

export default class MainSidebar extends Component {
  static contextType = NoteFulContext;

  // routeChange = () => {
  //   let path = 'AddFolder';
  //   let history = useHistory();
  //   history.push(path)
  // }

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
