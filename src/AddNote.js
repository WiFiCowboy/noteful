import React, { Component } from 'react'
import NoteFulContext from "./context/NoteFulContext";
import config from './config';

export default class AddNote extends Component{

  static contextType = NoteFulContext;

  handleAddNote = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const note = {
      name: name
    };
    console.log(name);
    fetch(`${config.API_ENDPOINT}/notes`, {
      method: "POST",
      body: JSON.stringify(note),
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
      .then(note => {
        console.log("HAF", this.context);
        this.context.addNote(note);
        this.props.history.push(`/note/${note}`);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render(){
    return(
      <div> 
        <form onSubmit={e => this.handleAddNote(e)}>
          <label>Enter Note Name</label>
          <input name="name" type="Text" placeholder="note name"></input>
          <button type={"submit"}>Submit</button>
        </form>
      </div>
    )
    }
}