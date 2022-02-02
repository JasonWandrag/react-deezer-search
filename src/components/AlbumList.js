import React from "react";

const AlbumList = (props) => {
  const albums = props.albums;
  return (
    <div>
      <h3>All Albums</h3>
      <div className="artists-container">
        {albums.map((album) => (
          <div className="album-card neu-border" key={album.id}>
            <img src={album.cover_big} alt={album.title} />
            <div className="album-card-text">
              <p>{album.title}</p>
              <p>{album.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
