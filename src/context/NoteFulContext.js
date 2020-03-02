import React from 'react';

const NoteFulContext = React.createContext({
  folders: [],
  notes: [],
  deleteNote: () => { },
  handleAddNote: () => { },
  handleAddFolder: () => { },
})

export default NoteFulContext;