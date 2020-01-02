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
                render={props => <MainSidebar folders={this.state.folders} />}
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
