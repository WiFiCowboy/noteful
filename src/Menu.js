import React, { Component } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import NoteFulContext from './context/NoteFulContext';

class Menu extends Component {
  static contextType = NoteFulContext;

  render(){
    return (
      <div className="mainMenuContainer">
        {this.props.notes.map(note => (
          <div className="menu" key={note.id}>
            <NavLink 
            to={"/note/" + note.id} >
              <h2>{note.name}</h2>
            </NavLink>
            <h3>Date Modified on {note.modified}</h3>
            <button className="deleteButton" onClick={() => {
          this.props.deleteNote(note.id);
        } }>Delete Note</button>
          </div>
        ))}
        <button className="addButton" onClick={e => this.props.history.push("/addNote")} >Add Note</button>
      </div>
    );
  }
  
}

export default Menu;

