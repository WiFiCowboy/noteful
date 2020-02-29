import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// have this render only the selected folder not the whole damn array
function NoteSidebar(props) {
	const note = props.notes.find((note) => note.id === props.match.params.noteID) || {};

	return (
		<div className="mainSidebar">
			<button className="addButton" onClick={() => window.history.back()}>
				Go Back
			</button>

			<h2>
				{/* this map is rendering all the notes  */}
				{props.folders.filter((folder) => folder.id === note.folder_id).map((folder) => (
					<li key={folder.id}>
						<NavLink to={'/folder/' + folder.id}>{folder.name}</NavLink>
					</li>
				))}
			</h2>
		</div>
	);
}

NoteSidebar.propTypes = {
	folders: PropTypes.array,
	notes: PropTypes.array,
	match: PropTypes.object
};

export default NoteSidebar;
