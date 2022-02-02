import { useState } from "react";
import ArtistList from "../components/ArtistList";
import Loader from "../components/Loader";

const Artists = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchArtist = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch(
      `https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/artist?q=${name}`
    )
      .then((res) => res.json())
      .then((data) => {
        setArtists(data.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <form className="search-form" onSubmit={searchArtist}>
        <input
          type="text"
          value={name}
          placeholder="Search for artist"
          className="neu-border-inset form-input"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button className="neu-border btn" type="submit">
          Search
        </button>
      </form>
      {loading && <Loader text="Searching for artists..." />}
      <div>{artists && <ArtistList artists={artists} />}</div>
    </div>
  );
};

export default Artists;
