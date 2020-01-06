import React from "react";
import NoteList from "./NoteList";

function Folder(props) {
  const folder = props.folders.find(
    folder => folder.id === props.match.params.folderID
  );
  console.log("From folder ",folder.id);
  return (
    <div>
      {folder ? folder.name : ""}
      <NoteList folderIdNotes={folder.id} notes={props.notes} />
    </div>
  );
}

export default Folder;
