import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
     super(props);
     this.state = { albums: albumData };
   }


  render() {
    return(
      <section className='library container'>
      {
          this.state.albums.map( (album, index) =>
            <Link to={`/album/${album.slug}`} key={index}>
            <img className="album-cover album-library item" src={album.albumCover} alt={album.title} />
            <div className="album-title column-third">{album.title}</div>
            <div className="album-artist column-third">{album.artist}</div>
            <div className="number-songs column-third">{album.songs.length} songs</div>
            </Link>
          )
        }
      </section>
    );
  }
}

export default Library;
