import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [{
      name: 'Send Your Love',
      artist: 'Sting',
      album: 'Sacred Love'
    },
    {
      name: 'You Can Close Your Eyes',
      artist: 'James Taylor',
      album: 'Mud Slide Slim'
    },
    {
      name: 'A Case of You',
      artist: 'Joni Mitchell',
      album: 'Miles of Aisles'
    }
  ],
    playlistName: 'Random list',
    plalistTracks: [{
      name: 'Animus Vox',
      artist: 'The Glitch Mob',
      album: 'Drink the Sea'
    },
    {
      name: 'Chandelier',
      artist: 'Sia',
      album: '1000 Forms of Fear'
    },
    {
      name: 'Wild Thoughts',
      artist: 'DJ Khaled',
      album: 'Grateful'
    }
      ]
    }
  }

  addTrack(track){
    if(!this.state.playlistTracks.includes(track)) {
      let updatedplaylist = this.state.playlistTracks;
      updatedplaylist.push(track);
      this.setState({playlistTracks: updatedplaylist});
    };
      this.addTrack = this.addTrack.bind(this);
  }

  removeTrack(track) {
    if(this.state.playlistTracks.includes(track)) {
      let updatedplaylist = this.state.playlistTracks;
      updatedplaylist.slice(track);
      this.setState({playlistTracks: updatedplaylist});
  }
    this.removeTrack = this.removeTrack.bind(this);
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults} onAdd={this.state.addTrack} />
              <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
