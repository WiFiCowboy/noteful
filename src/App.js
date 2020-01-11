import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Folder from "./Folder";
import Menu from "./Menu";
import Note from "./Note";
import Nav from "./Nav";
import NotFound from "./NotFound";
import MainSidebar from "./MainSidebar";
import NoteSidebar from "./NoteSidebar";
import NoteFulContext from "./context/NoteFulContext";
import config from "./config";

export default class App extends Component {
  state = {
    notes: [],
    folders: []
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`)
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok) return notesRes.json().then(e => Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json().then(e => Promise.reject(e));

        return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
        this.setState({ notes, folders });
      })
      .catch(error => {
        console.log({ error });
      });
  }

  handleDeleteNote = id => {
    this.setState({ notes: this.state.notes.filter(note => note.id !== id) });
  };

  // handleAddNote() {}

  // handleAddFolder() {}

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote
    };


    return (
      <NoteFulContext.Provider value={value}>
        <div className="App">
          <Nav />
          <div className="sideContent">
            <aside>
              <Switch>
                {["/", "/folder/:folderId"].map(path => (
                  <Route exact key={path} path={path} component={MainSidebar} />
                ))}
                <Route path="/Folder" component={MainSidebar} />} />
                <Route
                  path="/note/:noteID"
                  render={props => (
                    <NoteSidebar
                      {...props}
                      folders={this.state.folders}
                      notes={this.state.notes}
                    />
                  )}
                />
              </Switch>
            </aside>
            <main>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => <Menu notes={this.state.notes} deleteNote={this.handleDeleteNote}/>}
                />
                {/* /folder/folderID using links in sidebar */}
                <Route
                  path="/folder/:folderID"
                  render={props => <Folder {...props} deleteNote={this.handleDeleteNote}/>}
                />
                <Route
                  path="/note/:noteID"
                  render={props => (
                    <Note
                      {...props}
                      deleteNote={this.handleDeleteNote}
                      notes={this.state.notes}
                    />
                  )}
                />
                <Route component={NotFound} />
              </Switch>
            </main>
          </div>
        </div>
      </NoteFulContext.Provider>
    );
  }
}
