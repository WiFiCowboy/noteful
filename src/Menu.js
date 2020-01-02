import React from "react";
import "./index.css";

function Menu(props) {
  return (
    <div className="mainMenuContainer">
      {props.notes.map(note => (
        <div className="menu" key={note.id}>
          <h2>{note.name}</h2>
          <h3>Date Modified on {note.modified}</h3>
          <button className="deleteButton">Delete Note</button>
        </div>
      ))}
      <button className="addButton">Add Note</button>
    </div>
  );
}

export default Menu;
