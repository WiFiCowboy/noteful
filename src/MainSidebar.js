import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function MainSidebar(props) {
  return (
    <div className="mainSidebar">
      <Link to="/Folder">
        <h2>
          {props.folders.map(folder => (
            <li
              key={folder.id}
              onClick={() => props.handleFolderClick(folder.id)}
            >
              {folder.name}
            </li>
          ))}
        </h2>
      </Link>
      <button className="addButton">Add folder</button>
    </div>
  );
}

export default MainSidebar;
