import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import Feed from './containers/feed';
// import 'App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="header">
          <div>
            <button className="themes">Switch Mode</button>
          </div>
          <h2 id="snipshots-header"> Snipshots </h2>
        </div>
        <Feed />
        <div id="footer">
          <h3>Snipshots</h3>
          <p>By Dan, Joe, Julien, Kris and Paul</p>
          <p>Iterated by Callum, Jon, Keisha and Kris</p>
        </div>
      </div>
    );
  }
}

//ReactDOM.render(<App />, document.getElementById('root'));
export default App;
