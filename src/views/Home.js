import React from "react";
import Landing from "../assets/landing-web.png";

const Home = () => {
  return (
    <div className="landing">
      <div className="landing-text">
        <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          molestias voluptatibus consectetur voluptatum architecto! Repellendus
          quae sed eos, odit esse omnis! Assumenda est nemo aperiam consequuntur
          odio! Enim, quos iure.
        </p>
        <button>Get started</button>
      </div>
      <img src={Landing} className="landing-img" alt="logo" />
    </div>
  );
};

export default Home;
