import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TopTracks from "../components/TopTracks";
import AlbumList from "../components/AlbumList";
import Loader from "../components/Loader";
import Error from "../components/Error";
import AlbumTracks from "../components/AlbumTracks";

const Track = () => {
  const { id } = useParams();

  const [track, setTrack] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [albumList, setAlbumList] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`http://localhost:8001/track/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTrack(data.track);
        setTopTracks(data.topTracks.data);
        setAlbumList(data.albumTracklist.data);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {loading && <Loader text="Recording Track..." />}
      {error && <Error msg={error} />}
      {track && !loading && (
        <div className="artist-details">
          <div
            className="artist-information neu-border"
            style={{
              background: `linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${track.album.cover_big})`,
            }}
            data-aos="fade-right"
          >
            <div className="artist-name">
              <h2>{track.title}</h2>
              <p>{track.release_date}</p>
              <audio controls>
                <source src={track.preview} type="audio/mpeg" />
                No audio support.
              </audio>
            </div>
            <img src={track.artist.picture_medium} alt={track.artist.name} />
          </div>
          {topTracks && <TopTracks topTracks={topTracks} />}
        </div>
      )}
      {albumList && <AlbumTracks tracks={albumList} />}
    </div>
  );
};

export default Track;
