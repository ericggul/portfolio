import type { NextPage } from "next";

import { useState } from "react";
import Intro from "components/Intro";
import TicTacToe from "components/TicTacToe";

function Home() {
  const [currentComponent, setCurrentComponent] = useState<string>("tictactoe");

  return (
    <>
      {currentComponent === "intro" && <Intro moveToNextComponent={() => setCurrentComponent("tictactoe")} />}
      {currentComponent === "tictactoe" && <TicTacToe />}
    </>
  );
}

export default Home;
