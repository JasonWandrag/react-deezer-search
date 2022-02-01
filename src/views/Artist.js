import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const Artist = () => {
  const { id } = useParams();

  const [artist, setArtist] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`
    )
      .then((res) => res.json())
      .then((artist) => {
        setArtist(artist);
        return fetch(
          `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top`
        );
      })
      .then((res) => res.json())
      .then((topTracks) => {
        console.table(topTracks.data);
        setTopTracks(topTracks.data);
        return fetch(
          `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`
        );
      })
      .then((res) => res.json())
      .then((albums) => {
        console.log(albums.data);
        setAlbums(albums.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      Single Artist Page - {id}
      {artist && (
        <div>
          <img src={artist.picture_small} alt={artist.name} />
          <h3>{artist.name}</h3>
          <p>Fans: {artist.nb_fan}</p>
          {topTracks && (
            <div>
              <h3>Top 5</h3>
              {topTracks.map((track, idx) => (
                <div key={track.id}>
                  {idx}: {track.title} - {track.duration}
                </div>
              ))}
            </div>
          )}
          {albums && (
            <div>
              <h3>All Albums</h3>
              {albums.map((album) => (
                <div key={album.id}>
                  <img src={album.picture_small} alt={album.title} />
                  <p>{album.title}</p>
                  <p>{album.release_date}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Artist;
