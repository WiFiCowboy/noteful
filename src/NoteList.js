import React from "react";
import { NavLink } from "react-router-dom";

function NoteList(props) {
  const folderInfo = props.folderIdNotes;

  const notesReturn = props.notes.map(note => {
    if (note.folderId === folderInfo) {
      return (
        <div className="mainMenuContainer" key={note.id}>
          <div className="menu">
          <NavLink 
          to={"/Note/" + note.id} >
            <h2>{note.name}</h2>
          </NavLink>
            <h3>Date Modified on {note.modified}</h3>
            <button className="deleteButton">Delete Note</button>
          </div>
        </div>
      );
    }
  });

  return (
    <div>
      {notesReturn}
      <button className="addButton">Add Note</button>
    </div>
  );
}

export default NoteList;
