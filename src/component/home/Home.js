import React from "react";
import "../../Style/Home.css";
import ReactTypingEffect from "./ReactTypingEffect";

function Home() {
  return (
    <div className="home-main-container">
      <div className="container">
        <img
          src="https://img.freepik.com/premium-vector/digital-books-library-e-reader-white-background_101884-1114.jpg"
          alt="library image"
          className="home-library-img"
        />
        <ReactTypingEffect />
      </div>
    </div>
  );
}

export default Home;
