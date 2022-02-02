import { useEffect, useState } from "react";
import ArtistList from "../components/ArtistList";
import Loader from "../components/Loader";
import Error from "../components/Error";
import AOS from "aos";

const Artists = () => {
  // Default state
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
        data.data.length
          ? setArtists(data.data)
          : setError("No artists found by that name");
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
    AOS.init();
  }, []);
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
          data-aos="fade-right"
        />
        <button
          className="neu-border btn"
          type="submit"
          disabled={loading}
          data-aos="fade-left"
        >
          Search
        </button>
      </form>
      {loading && <Loader text="Searching for artists..." />}
      {error && <Error msg={error} />}
      {artists && <ArtistList artists={artists} />}
    </div>
  );
};

export default Artists;
