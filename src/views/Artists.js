import { useState } from "react";
import ArtistList from "../components/ArtistList";

const Artists = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(null);

  const searchArtist = async (e) => {
    e.preventDefault();
    await fetch(
      "https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/artist?q=" +
        name
    )
      .then((res) => res.json())
      .then((data) => {
        setArtists(data.data);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <form onSubmit={searchArtist}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      <div>{artists && <ArtistList artists={artists} />}</div>
    </div>
  );
};

export default Artists;
