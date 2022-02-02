import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";

import TopTracks from "../components/TopTracks";
import AlbumList from "../components/AlbumList";
import Loader from "../components/Loader";
import Error from "../components/Error";

import AOS from "aos";

const Artist = () => {
  const { id } = useParams();

  const [artist, setArtist] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Chaining fetch calls to get information from appropriate endpoints
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`http://localhost:8001/artist/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArtist(data.artist);
        setTopTracks(data.top_tracks.data);
        setAlbums(data.albums.data);
      })
      .catch((e) =>
        setError(
          "Service unavailable due to too many requests. Please try again in 5 minutes"
        )
      )
      .finally(() => setLoading(false));
    AOS.init();
  }, [id]);

  const fanTotal = (amt) => {
    let fans = amt < 1000 ? `${amt} fans` : `${Math.floor(amt / 1000)}k fans`;
    return fans;
  };
  return (
    <div>
      {loading && <Loader text="Interviewing artist..." />}
      {error && <Error msg={error} />}
      {artist && !loading && (
        <div className="artist-details">
          <div
            className="artist-information neu-border"
            style={{
              background: `linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${artist.picture_big})`,
            }}
            data-aos="fade-right"
          >
            <div className="artist-name">
              <h2>{artist.name}</h2>
              <p>{fanTotal(artist.nb_fan)}</p>
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
