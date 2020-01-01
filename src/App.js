import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Folder from "./Folder";
import Main from "./Main";
import Note from "./Note";
import Nav from "./Nav";
import NotFound from "./NotFound";

function App() {
    return (
      <div className="App">
        <main>
          <Nav />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/Folder" component={Folder} />
            <Route path="/Note" component={Note} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }

export default App;
