import React, { Component } from "react";
import NoteFulContext from "./context/NoteFulContext";
import config from './config';
import PropTypes from 'prop-types';

export default class AddFolder extends Component {
  static contextType = NoteFulContext;

  handleAddFolder = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const folder = {
      name: name
    };
    // fetch(`${config.API_ENDPOINT}/folders`, {
    fetch(`${config.API_FOLDERS}`, {
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

AddFolder.propTypes = {
  history: PropTypes.object
};