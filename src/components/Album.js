import React, { Component } from 'react';
import albumData from './../data/albums';


class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
       return albumData.slug === this.props.match.params.slug
     });

     this.state = {
       album: album || {},
     };
  }

  render() {
    return (
      <section className="album">
        <section id="album-info">
           <img id="album-cover-art" alt={''} src={this.state.album.albumCover || ''}  />
           <div className="album-details">
             <h1 id="album-title">{this.state.album.title}</h1>
             <h2 className="artist">{this.state.album.artist}</h2>
             <div id="release-info">{this.state.album.releaseInfo}</div>
            </div>

             <div className="song-list">
               <table id="song-list">
                 <tbody>
                  {this.state.album.songs.map( (album, index) =>
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{album.title}</td>
                      <td>{album.duration}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
         </section>
      </section>
    );
  }
}

export default Album;
