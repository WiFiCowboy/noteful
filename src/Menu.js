import React, { Component } from 'react';
import './index.css';
import { NavLink, Link } from 'react-router-dom';
import NoteFulContext from './context/NoteFulContext';
// import history from './history'
import PropTypes from 'prop-types';

class Menu extends Component {
	static contextType = NoteFulContext;

	render() {
		return (
			<div className="mainMenuContainer">
				{this.props.notes.map((note) => (
					<div className="menu" key={note.id}>
						<NavLink to={'/note/' + note.id}>
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
				))}
				{/* <form> */}

				{/* <button onClick={() => history.push('/addNote')}>add note</button> */}
				<Link className="addButton" to="/addNote">
					Add Note
				</Link>
				{/* </form> */}
			</div>
		);
	}
}

Menu.propTypes = {
	notes: PropTypes.array,
	deleteNote: PropTypes.func,
	history: PropTypes.object
};

export default Menu;
