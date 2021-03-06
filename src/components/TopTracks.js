import AOS from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const TopTracks = ({ topTracks }) => {
  const convertSecToMin = (sec) => {
    const min = Math.floor(sec / 60);
    const secLeft = sec - min * 60;
    return `${min}:${secLeft < 10 ? "0" + secLeft : secLeft}`;
  };
  useEffect(() => AOS.init());
  return (
    <div className="artist-tracks neu-border-inset" data-aos="fade-left">
      <h3>Top 5 tracks</h3>
      <ol className="tracks">
        {topTracks.map((track, idx) => (
          <Link to={"/tracks/" + track.id} key={track.id}>
            <li className="track">
              {idx + 1}. {track.title}{" "}
              <span>{convertSecToMin(track.duration)}</span>
            </li>
          </Link>
        ))}
      </ol>
    </div>
  );
};

export default TopTracks;
