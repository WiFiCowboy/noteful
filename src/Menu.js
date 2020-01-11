import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

function Menu(props) {
  return (
    <div className="mainMenuContainer">
      {props.notes.map(note => (
        <div className="menu" key={note.id}>
          <NavLink 
          to={"/note/" + note.id} >
            <h2>{note.name}</h2>
          </NavLink>
          <h3>Date Modified on {note.modified}</h3>
          <button className="deleteButton" onClick={() => {
        props.deleteNote(note.id);
      } }>Delete Note</button>
        </div>
      ))}
      <button className="addButton">Add Note</button>
    </div>
  );
}

export default Menu;

{/* <button className="deleteButton" onClick={() => {
        props.deleteNote(note.id);
         props.history.push("/");
      } }>Delete Note</button> */}