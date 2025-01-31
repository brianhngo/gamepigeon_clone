import React from "react";

interface GameDifficultyProp {
  difficulties: string[];
  changeUserSelectionHandler: (property: string, value: string) => void;
  userSelection: {
    game: string;
    opponent: string | null;
    difficulty: string;
  };
}

export default function GameDifficulty({
  difficulties,
  changeUserSelectionHandler,
  userSelection,
}: GameDifficultyProp) {
  return (
    <section className='flex justify-center gap-4 p-4'>
      {difficulties.map((difficulty, index) => (
        <button
          onClick={() => {
            if (userSelection.difficulty === difficulty) {
              changeUserSelectionHandler("difficulty", "");
            } else {
              changeUserSelectionHandler("difficulty", difficulty);
            }
          }}
          key={index}
          className={`px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all duration-300 ${
            userSelection.difficulty === difficulty
              ? "border-4 border-black"
              : ""
          }`}>
          {difficulty}
        </button>
      ))}
    </section>
  );
}
