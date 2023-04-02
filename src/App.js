import React from "react";
import HeroEpisod from "./components/HeroEpisod";
import HeroCard from "./components/HeroCard";

import "./App.css";


function App() {
  return (
    <div className={"App"}>
      <HeroCard />
      <span></span>
      <HeroEpisod />
    </div>
  );
}

export default App;
