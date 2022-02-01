import React from "react";
import { Link } from "react-router-dom";

const ArtistCard = (props) => {
  const artist = props.artist;
  return (
    <Link to={"/artists/" + artist.id}>
      {console.log(artist)}
      <h3>{artist.name}</h3>
    </Link>
  );
};

export default ArtistCard;
