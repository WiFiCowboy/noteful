import React from "react";
import { NavLink } from "react-router-dom";

// have this render only the selected folder not the whole damn array 
function NoteSidebar(props) {
  return (
    <div className="mainSidebar">
    {/* need to go back to previous folder */}
      <NavLink to="/Folder">
      <button className="addButton">Go Back</button>
      </NavLink>
      <h2>
      {/* this map is rendering all the notes  */}
        {props.notes.map(note => (
          <li key={note.id}>
            <NavLink to={"/note/" + note.id}>
            {note.name}
            </NavLink>
          </li>
        ))}
      </h2>
    </div>
  );
}

export default NoteSidebar;
