import React, { Component } from 'react';
import NoteFulContext from './context/NoteFulContext';
import config from './config';
import PropTypes from 'prop-types';

export default class AddNote extends Component {
	static contextType = NoteFulContext;

	handleAddNote = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const note = {
			name: name,
			content: e.target.content.value
		};
		console.log(name);
		fetch(`${config.API_ENDPOINT}/notes`, {
			method: 'POST',
			body: JSON.stringify(note),
			headers: {
				authorization: `bearer ${config.API_ENDPOINT}`,
				'content-type': 'application/json'
			}
		})
			.then((res) => {
				if (!res.ok) {
					return res.json().then((error) => {
						throw error;
					});
				}
				return res.json();
			})
			.then((note) => {
				console.log('HAF', this.context);
				this.context.addNote(note);
				this.props.history.push(`/note/${note.id}`);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	render() {
		return (
			<div>
				<form onSubmit={(e) => this.handleAddNote(e)}>
					<label>Enter Note Name</label>
					<input required name="name" type="Text" placeholder="note name" />
					<textarea placeholder="enter note" name="content" />
					<button type={'submit'}>Submit</button>
				</form>
			</div>
		);
	}
}

AddNote.propTypes = {
	history: PropTypes.object
};