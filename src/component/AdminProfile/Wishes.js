import React from "react";

function Wishes() {
  let d = new Date();
  let hour = d.getHours();
  console.log(hour);

  var greet;
  if (hour < 12) {
    greet = "Good Morning";
  } else if (hour >= 12 && hour < 16) {
    greet = "Good Afternoon";
  } else if (hour >= 16 && hour <= 24) {
    greet = "Good evening";
  }
  return (
    <div>
      <h2>{greet}</h2>
    </div>
  );
}

export default Wishes;
