import React from 'react';
import PropTypes from 'prop-types';

function Note(props) {
	const note = props.notes.find((note) => note.id === props.match.params.noteID) || {};
	return (
		<div>
			<div className="menu">
				<h2>{note.name}</h2>
				<h3>Date Modified on {note.modified}</h3>
				<button
					className="deleteButton"
					onClick={() => {
						props.deleteNote(note.id);
						props.history.push('/');
					}}
				>
					Delete Note
				</button>
			</div>
			<p>{note.content}</p>
		</div>
	);
}

Note.propTypes = {
	notes: PropTypes.array,
	match: PropTypes.object,
	deleteNote: PropTypes.func,
	history: PropTypes.array
};

export default Note;
