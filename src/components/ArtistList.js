import ArtistCard from "./ArtistCard";

const ArtistList = ({ artists }) => {
  return (
    <div className="artists-container">
      {artists.map((a) => (
        <ArtistCard key={a.id} artist={a} />
      ))}
    </div>
  );
};

export default ArtistList;
