import React, { Component } from 'react';
import { View } from 'react-native';
//import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Class component
class AlbumList extends Component {
	// Class Level Property
	state = { albums: [] };

	// Lifecycle Method
	componentWillMount() {
		// Console log debugging
		//console.log('componentWillMount in AlbumList');
		// Debugger Statement
		//debugger;
		fetch('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => response.json())
			.then(responseData => this.setState({ albums: responseData }));
		//.then(response => this.setState({ albums: response.data }));
	}

	renderAlbums() {
		return this.state.albums.map(album => (
			<AlbumDetail key={album.title} album={album} />
		));
	}

	render() {
		console.log(this.state);
		return <View>{this.renderAlbums()}</View>;
	}
}

export default AlbumList;
