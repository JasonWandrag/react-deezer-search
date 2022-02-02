import { useEffect } from "react";
import { Link } from "react-router-dom";
import Landing from "../assets/landing-web.png";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="landing">
      <div className="landing-text" data-aos="fade-right">
        <h1>Welcome to Melodic.ly</h1>
        <p>
          Discover everything about your favourite artists, from amount of fans,
          to top songs, to all known albums.
        </p>
        <p>
          Impress your friends with your abundant knowledge on popular artists.
          Click the button below to start searching for artists
        </p>
        <Link className="btn neu-border" to={"/artists"}>
          Search for your favourite artist
        </Link>
      </div>
      <img
        src={Landing}
        className="landing-img"
        alt="logo"
        data-aos="fade-left"
      />
    </div>
  );
};

export default Home;
