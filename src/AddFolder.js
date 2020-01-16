import React, { Component } from "react";
import NoteFulContext from "./context/NoteFulContext";
import config from './config';

export default class AddFolder extends Component {
  static contextType = NoteFulContext;

  handleAddFolder = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const folder = {
      name: name
    };
    console.log(name);
    fetch(`${config.API_ENDPOINT}/folders`, {
      method: "POST",
      body: JSON.stringify(folder),
      headers: {
        authorization: `bearer ${config.API_ENDPOINT}`,
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error;
          });
        }
        return res.json();
      })
      .then(folder => {
        console.log("HAF", this.context);
        this.context.addFolder(folder);
        this.props.history.push(`/folder/${folder}`);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="addFolderForm">
        <form onSubmit={e => this.handleAddFolder(e)}>
          <label>Enter Folder Name</label>
          <input name="name" type="Text" placeholder="folder name"></input>
          <button type={"submit"}>Submit</button>
        </form>
      </div>
    );
  }
}
