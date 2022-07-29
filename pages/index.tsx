import type { NextPage } from "next";

import { useState } from "react";
import Intro from "components/Intro";
import TicTacToe from "components/TicTacToe";
import Booking from "components/Booking";

function Home() {
  const [currentComponent, setCurrentComponent] = useState<string>("booking");

  return (
    <>
      {currentComponent === "intro" && <Intro moveToNextComponent={() => setCurrentComponent("tictactoe")} />}
      {currentComponent != "intro" && (
        <>
          <TicTacToe goBackToIntro={() => setCurrentComponent("intro")} moveToNextComponent={() => setCurrentComponent("booking")} currentComponent={currentComponent} />
          <Booking currentComponent={currentComponent} />
        </>
      )}
    </>
  );
}

export default Home;
