import React, { Component } from 'react';
import NoteList from './NoteList';
import NoteFulContext from './context/NoteFulContext';
import PropTypes from 'prop-types';

export default class Folder extends Component {
	static contextType = NoteFulContext;

	render() {
		const { folders = [] } = this.context;
		const folder = folders.find((folder) => folder.id === this.props.match.params.folder_id);

		return (
			<div>
				{folder ? folder.name : ''}
				<NoteList folderID={this.props.match.params.folder_id} />
			</div>
		);
	}
}

Folder.propTypes = {
	match: PropTypes.object
};