import React from "react";
import { Link } from "react-router-dom";

function NoteList(props) {
  const folderInfo = props.folderIdNotes;

  const notesReturn = props.notes.map(note => {
    if (note.folderId === folderInfo) {
      return (
        <div className="mainMenuContainer" key={note.id}>
          <div className="menu">
            <Link to="">
              <h2>{note.name}</h2>
            </Link>
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