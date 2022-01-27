import React from "react";
import Logo from "src/components/Logo/Logo";
import PowerButton from "src/components/PowerButton/PowerButton";
import "../styles/pages/Main.scss";
const Main = () => {
  return (
    <article className="mainPage">
      <section className="container">
        <PowerButton/>
        <Logo/>
      </section>
    </article>
  );
};

export default Main;
