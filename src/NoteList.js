import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import NoteFulContext from './context/NoteFulContext';
import PropTypes from 'prop-types';

export default class NoteList extends Component {
	static contextType = NoteFulContext;


	render() {
		// const folderInfo = folderIdNotes;
		const { notes = [], deleteNote } = this.context;
		console.log(this.props.folderID, notes);

		const notesReturn = notes.map((note) => {
			if (note.folder_id === parseInt(this.props.folderID)) {
				return (
					<div className="mainMenuContainer" key={note.id}>
						<div className="menu">
							<NavLink to={'/Note/' + note.id}>
								<h2>{note.name}</h2>
							</NavLink>
							<h3>Date Modified on {note.date_modified}</h3>
							<button
								className="deleteButton"
								onClick={() => {
									this.context.deleteNote(note.id);
								}}
							>
								Delete Note
							</button>
						</div>
					</div>
				);
			}
		});
		return (
			<div>
				{notesReturn}
				<Link className="addButton" to="/addNote">
					Add Note 1
				</Link>
			</div>
		);
	}
}

NoteList.propTypes = {
	folderID: PropTypes.string
};
