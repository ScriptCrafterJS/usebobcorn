import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating maxRating={10} color="black" onSetRating={setMovieRating} />
      <p>Our movie rating is {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} defaultRating={3} />
    <StarRating
      maxRating={5}
      color="blue"
      messages={["Bad", "Okay", "Good", "Great", "Amazing"]}
      size={60}
    />
    <StarRating maxRating={5} size={28} color="green" className="test" />
    <Test />
  </React.StrictMode>
);
