import React from 'react';
import logo from './logo.svg';
import './App.css';
import './../SearchBar';
import './../SearchResults';
import './../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchResults: [{
      name: 'Send Your Love',
      artist: 'Sting',
      album: 'Sacred Love'
    },
    {
      name: 'You Can Close Your Eyes',
      artist: 'James Taylor',
      album: 'Mud Slide Slim'
    ,
    {
      name: 'A Case of You',
      artist: 'Joni Mitchell',
      album: 'Miles of Aisles'
    }
  ]
     
    }
    
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
            /*-- Add a SearchBar component --*/
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults} />
              /*-- Add a Playlist component --*/
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
