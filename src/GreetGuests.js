import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting.js";

const GreetGuests = () => {
  const weCanUseVariablesAsPropValues = "Grace";

  return (
    <div>
      <Greeting name="Caroline" />
      <Greeting name="Marie" />
      <Greeting name={weCanUseVariablesAsPropValues} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<GreetGuests />, rootElement);
