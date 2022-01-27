import React from "react";
import { NavLink } from "react-router-dom";
import { powerOff } from "src/assets/svg/svg-modules/powerOff";
import "./PowerButton.scss";
const PowerButton = () => {
  return (
    <article className="powerButton">
      <NavLink to="/">{powerOff}</NavLink>
    </article>
  );
};

export default PowerButton;
