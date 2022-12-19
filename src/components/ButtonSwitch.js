import { useState } from "react";
import "./ButtonSwitch.css";

const ButtonSwitch = () => {
  const [isShown, setIsShown] = useState("false");
  return (
    <div className="my-button">
      <h2>{isShown ? "bla bla bla" : ""}</h2>
      <button
        onClick={() => {
          setIsShown(!isShown);
        }}
      >
        {isShown ? "click to hide text" : "click to show text"}
      </button>
    </div>
  );
};
export default ButtonSwitch;
