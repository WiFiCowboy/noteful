import React, { Component } from 'react';
import NoteFulContext from './context/NoteFulContext';

export default class AddFolder extends Component {
  static contextType = NoteFulContext;

  render(){
    return(
        <div className="addFolderForm">
          <form onSubmit={(e) => this.context.handleAddFolder(e)}>
            <label>Enter Folder Name</label>
            <input name="name" type="Text" placeholder='folder name'></input>
            <button type={"submit"} >Submit</button>
          </form>
        </div>
    )
  }
}