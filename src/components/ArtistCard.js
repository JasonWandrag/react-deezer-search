import React from "react";
import { Link } from "react-router-dom";

const ArtistCard = (props) => {
  const artist = props.artist;
  return (
    <Link className="artist-card neu-border" to={"/artists/" + artist.id}>
      <img src={artist.picture_medium} alt={artist.name} />
      <div className="artist-card-text">
        <h3>{artist.name}</h3>
        <p>Fans: {artist.nb_fan}</p>
        <p>Albums: {artist.nb_album}</p>
      </div>
    </Link>
  );
};

export default ArtistCard;
