import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Folder from './Folder';
import Menu from './Menu';
import Note from './Note';
import Nav from './Nav';
import NotFound from './NotFound';
import MainSidebar from './MainSidebar';
import NoteSidebar from './NoteSidebar';
import NoteFulContext from './context/NoteFulContext';
import config from './config';
import AddFolder from './AddFolder';
import AddNote from './AddNote';

export default class App extends Component {
	state = {
		notes: [],
		folders: []
	};

	componentDidMount() {
		// OG 
		// Promise.all([ fetch(`${config.API_ENDPOINT}/notes`), fetch(`${config.API_ENDPOINT}/folders`) ])
		// TEST
		Promise.all([fetch(`${config.API_NOTES}`), fetch(`${config.API_FOLDERS}`)])
			.then(([notesRes, foldersRes]) => {
				if (!notesRes.ok) return notesRes.json().then((e) => Promise.reject(e));
				if (!foldersRes.ok) return foldersRes.json().then((e) => Promise.reject(e));

				return Promise.all([notesRes.json(), foldersRes.json()]);
			})
			.then(([notes, folders]) => {
				this.setState({ notes, folders });
			})
			.catch((error) => {
				console.log({ error });
			});
	}

	// fetch notes request
	handleDeleteNote = (id) => {
		return fetch(config.API_NOTES + `${id}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json',
			}
		})
			.then(res => {
				if (!res.ok)
					return res.json().then(error => Promise.reject(error))
			})
			.then(noContent => {
				this.setState({ notes: this.state.notes.filter((note) => note.id !== id) });
			})
			.catch(error => {
				console.error(error)
			})
	}




	addFolder = (folder) => {
		this.setState({
			folders: [...this.state.folders, folder]
		});
	};

	addNote = (note) => {
		this.setState({
			notes: [...this.state.notes, note]
		});
	};

	render() {
		const value = {
			notes: this.state.notes,
			folders: this.state.folders,
			deleteNote: this.handleDeleteNote,
			handleAddFolder: this.handleAddFolder,
			addFolder: this.addFolder,
			addNote: this.addNote
		};

		return (
			<NoteFulContext.Provider value={value}>
				<div className="App">
					<Nav />
					<div className="sideContent">
						<aside>
							<Switch>
								{['/', '/folder/:folder_id'].map((path) => (
									<Route exact key={path} path={path} component={MainSidebar} />
								))}
								<Route path="/Folder" component={MainSidebar} />} />
								<Route
									path="/note/:noteID"
									render={(props) => (
										<NoteSidebar {...props} folders={this.state.folders} notes={this.state.notes} />
									)}
								/>
							</Switch>
						</aside>
						<main>
							<Switch>
								<Route
									exact
									path="/"
									render={(props) => (
										<Menu
											notes={this.state.notes}
											deleteNote={this.handleDeleteNote}
											history={props.history}
										/>
									)}
								/>
								{/* /folder/folderID using links in sidebar */}
								<Route
									path="/folder/:folderID"
									render={(props) => <Folder {...props} deleteNote={this.handleDeleteNote} />}
								/>
								<Route
									path="/note/:noteID"
									render={(props) => (
										<Note {...props} deleteNote={this.handleDeleteNote} notes={this.state.notes} />
									)}
								/>
								<Route path="/addFolder" render={(props) => <AddFolder {...props} />} />
								<Route path="/addNote" render={(props) => <AddNote {...props} />} />
								<Route component={NotFound} />
							</Switch>
						</main>
					</div>
				</div>
			</NoteFulContext.Provider>
		);
	}
}

// run the noteful server !!!!
