import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import './landing.css';
import './library.css';
import './album.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <a href='/' className='logo'>
            <img src='assets/images/bloc_jams_logo.png' alt='bloc jams logo' />
          </a>
          <nav className='navbar'>
            <Link to='/library'>Library</Link>
          </nav>

        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
