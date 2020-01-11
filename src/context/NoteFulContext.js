import React from 'react';

const NoteFulContext = React.createContext({
  folders: [],
  notes: [],
  handleDeleteNote: () => {},
  handleAddNote: () => {},
  handleAddFolder: () => {},
})

export default NoteFulContext;