import React from 'react';
import PropTypes from 'prop-types';
import NoteFulContext from './context/NoteFulContext';


class Note extends React.Component {
	static contextType = NoteFulContext
	render() {
		const note = this.props.notes.find((note) => note.id === parseInt(this.props.match.params.noteID)) || {};
		return (
			<div>
				<div className="menu">
					<h2>{note.name}</h2>
					<h3>Date Modified on {note.date_modified}</h3>
					<button
						className="deleteButton"
						onClick={() => {
							this.context.deleteNote(note.id)
								.then(() => this.props.history.push("/"))
						}}
					>
						Delete Note
				</button>
				</div>
				<p>{note.content}</p>
			</div>
		);
	}

}

Note.propTypes = {
	notes: PropTypes.array,
	match: PropTypes.object,
	deleteNote: PropTypes.func,
	history: PropTypes.array
};

export default Note;
