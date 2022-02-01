import React from "react";
import { Link } from "react-router-dom";

const ArtistCard = (props) => {
  const artist = props.artist;
  return (
    <Link to={"/artists/" + artist.id}>
      <div className="artist-card">
        <img src={artist.picture_small} alt={artist.name} />
        <h3>{artist.name}</h3>
        <p>Fans: {artist.nb_fan}</p>
        <p>Albums: {artist.nb_album}</p>
      </div>
    </Link>
  );
};

export default ArtistCard;
