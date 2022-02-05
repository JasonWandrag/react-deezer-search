import React from "react";
import { Link } from "react-router-dom";

const AlbumTracks = ({ tracks }) => {
  return (
    <div>
      <h3>Full Album</h3>
      <div className="tracks-container">
        {tracks.map((track) => {
          return (
            <Link
              className="album-track neu-border"
              to={"/tracks/" + track.id}
              key={track.id}
            >
              <p>{track.title}</p>
              <audio controls>
                <source src={track.preview} type="audio/mpeg" />
                No audio support.
              </audio>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AlbumTracks;
