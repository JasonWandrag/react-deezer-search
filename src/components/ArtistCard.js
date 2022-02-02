import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";

const ArtistCard = ({ artist }) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Link
      className="artist-card neu-border"
      to={"/artists/" + artist.id}
      data-aos="fade-up"
    >
      <img src={artist.picture_medium} alt={artist.name} />
      <div className="artist-card-text">
        <h3>{artist.name}</h3>
        <div>
          <p>Fans: {artist.nb_fan}</p>
          <p>Albums: {artist.nb_album}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArtistCard;
