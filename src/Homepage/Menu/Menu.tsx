import React, { useState } from "react";
import GameSelection from "./GameSelection";
import Opponents from "./Opponents";
import GameDifficulty from "./GameDifficulty";
import axios from "axios";

export default function Menu() {
  const games: string[] = ["Checkers", "Chess"];
  const opponents: string[] = ["AI", "PvP"];
  const difficulties: string[] = ["Easy", "Medium", "Hard"];

  const [userSelection, setUserSelection] = useState<{
    game: string;
    opponent: string;
    difficulty: string;
  }>({
    game: "",
    opponent: "",
    difficulty: "",
  });

  const changeUserSelectionHandler = (property: string, value: string) => {
    try {
      setUserSelection((prev) => ({
        ...prev,
        [property]: value,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const letsPlayHandler = (event: any) => {
    try {
      event.preventDefault();
      const { data } = axios.post(
        "http://localhost:8000/api/users/game_queue",
        userSelection,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-3'>
      <GameSelection
        games={games}
        changeUserSelectionHandler={changeUserSelectionHandler}
        userSelection={userSelection}
      />
      {userSelection.game.length > 0 ? (
        <Opponents
          opponents={opponents}
          changeUserSelectionHandler={changeUserSelectionHandler}
          userSelection={userSelection}
        />
      ) : null}

      {/* Renders only if the user selects AI as opponent */}
      {userSelection.opponent === "AI" ? (
        <GameDifficulty
          difficulties={difficulties}
          changeUserSelectionHandler={changeUserSelectionHandler}
          userSelection={userSelection}
        />
      ) : null}
      {(userSelection.game.length > 1 && userSelection.opponent === "PvP") ||
      (userSelection.game.length > 1 &&
        userSelection.opponent === "AI" &&
        userSelection.difficulty.length > 1) ? (
        <button
          onClick={() => letsPlayHandler}
          className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          {" "}
          Lets Play
        </button>
      ) : null}
    </div>
  );
}
