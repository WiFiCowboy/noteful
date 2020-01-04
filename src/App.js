import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Folder from "./Folder";
import Menu from "./Menu";
import Note from "./Note";
import Nav from "./Nav";
import NotFound from "./NotFound";
import STORE from "./store";
import MainSidebar from "./MainSidebar";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = STORE;
  }

handleFolderClick(folderId) {

  console.log("this is folder: ",folderId);
  const noteId = STORE.notes.map( items => items.folderId)
  for(let i = 0; i < noteId.length; i++){
    if(noteId[i] === folderId){
      console.log("this is note: ",noteId[i]);
      // return an array of componenet looping therough matching notes 
      return (
        <Note noteID={noteId[i]} />
      );
    }
    
  }

}

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Nav />
        <div className="sideContent">
          <aside>
            <Switch>
              <Route
                exact
                path="/"
                render={props => <MainSidebar handleFolderClick={this.handleFolderClick} folders={this.state.folders} />}
              />
              {/* <Route path="/Folder" component={MainSidebar} />
              <Route path="/Note" component={MainSidebar} /> */}
            </Switch>
          </aside>
          <main>
            <Switch>
              <Route
                exact
                path="/"
                render={props => <Menu notes={this.state.notes} />}
              />
              {/* /folder/folderID using links in sidebar */}
              <Route path="/Folder" component={Folder} />
              <Route path="/Note" component={Note} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}
