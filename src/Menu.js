import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <div className="mainMenuContainer">
      {props.notes.map(note => (
        <div className="menu" key={note.id}>
          <Link to="" >
            <h2>{note.name}</h2>
          </Link>
          <h3>Date Modified on {note.modified}</h3>
          <button className="deleteButton">Delete Note</button>
        </div>
      ))}
      <button className="addButton">Add Note</button>
    </div>
  );
}

export default Menu;
