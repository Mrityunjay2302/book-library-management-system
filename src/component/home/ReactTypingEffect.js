import React from "react";
import { useState, useEffect } from "react";
import Typist from "react-typist";

function ReactTypingEffect() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log("Count: " + count);
    setCount(1);
  }, [count]);

  return (
    <div id="typing_effect" style={{ display: "flex", fontWeight: "500" }}>
      <p
        className="welcome_text"
        id="welcome_text"
        style={{
          marginRight: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        Welcome To
      </p>
      <p className="welcome_text">
        {" "}
        {count ? (
          <Typist avgTypingDelay={110} onTypingDone={() => setCount(0)}>
            <span> Library</span>
            <Typist.Backspace count={20} delay={500} />
            <span> Digital Library</span>
          </Typist>
        ) : (
          ""
        )}
      </p>
    </div>
  );
}

export default ReactTypingEffect;
