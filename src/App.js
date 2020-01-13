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
import AddFolder from "./AddFolder";

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

  // fetch notes request
  handleDeleteNote = id => {
    this.setState({ notes: this.state.notes.filter(note => note.id !== id) });
  };

  // use fetch request to update these
  // handleAddNote() {}

  addFolder = folder => {
    this.setState({
      folders: [ 
        ...this.state.folders, 
        folder]
    });
  };

  handleAddFolder(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const folder = {
      folders: name
    };
    console.log(name);
    fetch(`${config.API_ENDPOINT}/folders`, {
      method: "POST",
      headers: {
        authorization: `bearer ${config.API_ENDPOINT}`
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
        console.log('HAF', this.context);
        this.context.addFolder(folder)
        this.props.history.push(`/folder/${folder}`)
      })
      .catch(error => {
        console.error(error);
      });

      // .then(data => {
      //   title.value = "";
      //   url.value = "";
      //   description.value = "";
      //   rating.value = "";
      //   this.context.addBookmark(data);
      //   this.props.history.push("/");
    // this.setState({ folders: this.state.folders})
    // fetch()
    // .then(() => this.componentDidMount())
    // // fetch to post
    // fetch()
    // // .then(post new folder )
  }

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote,
      handleAddFolder: this.handleAddFolder,
      addFolder: this.addFolder
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
                  render={props => (
                    <Menu
                      notes={this.state.notes}
                      deleteNote={this.handleDeleteNote}
                    />
                  )}
                />
                {/* /folder/folderID using links in sidebar */}
                <Route
                  path="/folder/:folderID"
                  render={props => (
                    <Folder {...props} deleteNote={this.handleDeleteNote} />
                  )}
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
                <Route path="/addFolder" component={AddFolder} />
                <Route component={NotFound} />
              </Switch>
            </main>
          </div>
        </div>
      </NoteFulContext.Provider>
    );
  }
}
