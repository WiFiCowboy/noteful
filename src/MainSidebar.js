import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function MainSidebar(props) {
  return (
    <div className="mainSidebar">
      <h2>
        {props.folders.map(folder => (
          <li key={folder.id}>
            <Link 
            to={"/folder/" + folder.id}>{folder.name}
            </Link>
          </li>
        ))}
      </h2>

      <button className="addButton">Add folder</button>
    </div>
  );
}

export default MainSidebar;
