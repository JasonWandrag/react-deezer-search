const TopTracks = ({ topTracks }) => {
  return (
    <div className="artist-tracks neu-border-inset">
      <h3>Top 5 tracks</h3>
      <ol className="tracks">
        {topTracks.map((track) => (
          <li className="track" key={track.id}>
            {track.title} <span>{track.duration}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TopTracks;
