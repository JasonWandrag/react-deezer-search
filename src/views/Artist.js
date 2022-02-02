import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";

import TopTracks from "../components/TopTracks";
import AlbumList from "../components/AlbumList";
import Loader from "../components/Loader";

const Artist = () => {
  const { id } = useParams();

  const [artist, setArtist] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
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
        setTopTracks(topTracks.data);
        return fetch(
          `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`
        );
      })
      .then((res) => res.json())
      .then((albums) => {
        setAlbums(albums.data);
      })
      .catch((e) =>
        setError(
          "Service unavailable due to too many requests. Please try again in 5 minutes"
        )
      )
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      {loading && <Loader text="Interviewing artist..." />}
      {error}
      {artist && !loading && (
        <div className="artist-details">
          <div
            className="artist-information neu-border"
            style={{
              background: `linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${artist.picture_big})`,
            }}
          >
            <div className="artist-name">
              <h2>{artist.name}</h2>
              <p>Fans: {artist.nb_fan}</p>
            </div>
            <img src={artist.picture_medium} alt={artist.name} />
          </div>
          {topTracks && <TopTracks topTracks={topTracks} />}
        </div>
      )}
      {albums && <AlbumList albums={albums} />}
    </div>
  );
};

export default Artist;
