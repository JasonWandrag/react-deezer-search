import { useEffect, useState } from "react";
import ArtistList from "../components/ArtistList";
import Loader from "../components/Loader";

const Artists = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(
    "Start by entering an artist name in the search bar above"
  );

  const searchArtist = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name) {
      setError("Please enter an artist name before continuing");
      setLoading(false);
      return;
    }
    setError("");
    await fetch(
      `https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/artist?q=${name}`
    )
      .then((res) => res.json())
      .then((data) => {
        setArtists(data.data);
      })
      .catch((e) =>
        setError(
          "Service unavailable due to too many requests. Please try again in 5 minutes"
        )
      )
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
        <button className="neu-border btn" type="submit" disabled={loading}>
          Search
        </button>
      </form>
      {loading && <Loader text="Searching for artists..." />}
      {error}
      <div>{artists && <ArtistList artists={artists} />}</div>
    </div>
  );
};

export default Artists;
