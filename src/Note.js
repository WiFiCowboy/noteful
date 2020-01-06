import React from 'react';

function Note(props) {
  const note = props.notes.find(note => note.id === props.match.params.noteID)
  return(
    <div>
      {note ? note.name:""}
      
    </div>
  )
}

export default Note;