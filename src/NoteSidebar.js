  
import React from "react";
import { NavLink } from "react-router-dom";

// have this render only the selected folder not the whole damn array
function NoteSidebar(props) {
  console.log("noteside:", props.folders);
  const note = props.notes.find(note => note.id === props.match.params.noteID);

  return (
    <div className="mainSidebar">
      <button className="addButton" onClick={() => window.history.back()}>
        Go Back
      </button>

      <h2>
        {/* this map is rendering all the notes  */}
        {props.folders.filter(folder => folder.id === note.folderId).map(folder => (
          <li key={folder.id}>
            <NavLink to={"/folder/" + folder.id}>{folder.name}</NavLink>
          </li>
        ))}
      </h2>
    </div>
  );
}

export default NoteSidebar;
