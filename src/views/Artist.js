import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const Artist = () => {
  const { id } = useParams();

  const [artist, setArtist] = useState(null);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + id
    )
      .then((res) => res.json())
      .then((data) => {
        setArtist(data);
      });
  }, []);
  return (
    <div>
      Single Artist Page - {id}
      {artist && <div>{artist.name}</div>}
    </div>
  );
};

export default Artist;
