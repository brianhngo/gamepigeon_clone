import React from "react";

interface GameDifficultyProp {
  opponents: string[];
  changeUserSelectionHandler: (property: string, value: string) => void;
  userSelection: {
    game: string;
    opponent: string | null;
    difficulty: string;
  };
}

export default function Opponents({
  opponents,
  changeUserSelectionHandler,
  userSelection,
}: GameDifficultyProp) {
  return (
    <section className='flex flex-col gap-3'>
      <h1 className='text-3xl font-bold mb-4 text-center'>Opponent</h1>
      <div className='flex flex-row gap-3'>
        {opponents.map((opponent, index) => {
          return (
            <div
              onClick={() => {
                if (userSelection.opponent === opponent) {
                  changeUserSelectionHandler("opponent", "");
                  changeUserSelectionHandler("difficulty", "");
                } else {
                  changeUserSelectionHandler("opponent", opponent);
                }
              }}
              key={index}
              className={`max-w-sm bg-gray-200 rounded overflow-hidden shadow-lg group transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                userSelection.opponent === opponent
                  ? "border-4 border-black"
                  : ""
              }`}>
              <img
                className='w-full h-48 '
                src={`${opponent}.png`}
                alt={opponent}
              />
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{opponent} </div>
              </div>
              <div className='px-6 pt-4 pb-2'>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                  Competitive
                </span>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                  PvsAI
                </span>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                  PvP
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
