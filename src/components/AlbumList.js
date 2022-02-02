import AOS from "aos";
import { useEffect } from "react";
const AlbumList = ({ albums }) => {
  useEffect(() => AOS.init());
  return (
    <div>
      <h3>All Albums</h3>
      <div className="artists-container">
        {albums.map((album) => (
          <div
            className="album-card neu-border"
            key={album.id}
            data-aos="fade-up"
          >
            <img src={album.cover_big} alt={album.title} />
            <div className="album-card-text">
              <p>{album.title}</p>
              <p>{album.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
