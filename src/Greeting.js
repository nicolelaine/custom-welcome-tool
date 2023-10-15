import React from "react";

const Greeting = (props) => (
  <div>
    <h2>Welcome!</h2>
    <p>Hi, {props.name}.</p>
    <p>We are so happy that you've come to crush React dev skillz with us!</p>
  </div>
);

export default Greeting;
