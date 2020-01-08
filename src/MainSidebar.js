import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

function MainSidebar(props) {
  return (
    <div className="mainSidebar">
      <h2>
        {props.folders.map(folder => (
          <li key={folder.id}>
            {/* <h2>{folderCheck}</h2> */}
            <NavLink to={"/folder/" + folder.id}>{folder.name}</NavLink>
          </li>
        ))}
      </h2>

      <button className="addButton">Add folder</button>
    </div>
  );
}

export default MainSidebar;
