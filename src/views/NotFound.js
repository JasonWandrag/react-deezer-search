import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2 style={{ marginBottom: "30px" }}>
        I am not sure how you got here, but welcome to the 404 page!
      </h2>
      <Link className="btn neu-border" to={"/"}>
        Go home
      </Link>
    </div>
  );
};

export default NotFound;
