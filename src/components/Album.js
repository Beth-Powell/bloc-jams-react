import React, { Component } from 'react';
import albumData from './../data/albums';


class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
       return album.slug === this.props.match.params.slug
     });

     this.state = {
       album: album
     };

    }

  render() {
    console.log(this.state.album);
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
               {this.state.album.songs.map( (song, index) =>
                   <tr>
                     <td key={index}>{index + 1}</td>
                     <td >{song.title}</td>
                     <td >{song.duration}</td>
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
