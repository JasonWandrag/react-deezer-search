import React from "react";
import ArtistCard from "./ArtistCard";

const ArtistList = (props) => {
  const artists = props.artists;
  return (
    <div>
      {console.log(artists)}
      {artists.map((a) => (
        <ArtistCard key={a.id} artist={a} />
      ))}
    </div>
  );
};

export default ArtistList;
