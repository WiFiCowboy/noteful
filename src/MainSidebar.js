import React from 'react';
import './index.css';

function MainSidebar(props) {
  return(
    <div className="mainSidebar">
      <h2>{props.folders.map(folder => (
        <li key={folder.id} >{folder.name}</li>
      ))}</h2>
      <button className="addButton">Add folder</button>
    </div>
  )
}

export default MainSidebar;