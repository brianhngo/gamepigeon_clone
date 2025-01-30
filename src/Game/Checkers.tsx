import React from "react";
import Gameboard from "./Gameboard";
import Scoreboard from "./Scoreboard";

export default function Checkers() {
  return (
    <div className=' w-screen h-screen flex mx-auto my-auto justify-center items-center gap-5 '>
      <Gameboard />
      <Scoreboard />
    </div>
  );
}
