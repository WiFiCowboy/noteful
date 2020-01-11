import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NoteFulContext from "./context/NoteFulContext";

export default class NoteList extends Component {
  static contextType = NoteFulContext;
  render() {
    // const folderInfo = folderIdNotes;
    const { folders = [], notes = [], deleteNote } = this.context;

    const notesReturn = notes.map(note => {
      if (note.folderId === this.props.folderID) {
        return (
          <div className="mainMenuContainer" key={note.id}>
            <div className="menu">
              <NavLink to={"/Note/" + note.id}>
                <h2>{note.name}</h2>
              </NavLink>
              <h3>Date Modified on {note.modified}</h3>
              <button
                className="deleteButton"
                onClick={() => {
                  deleteNote(note.id);
                }}
              >
                Delete Note
              </button>
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
}
