import React from "react";

export default function Menu() {
  const games: string[] = ["Checkers", "Chess"];

  return (
    <div className=' w-[500px] h-[400px] flex flex-row justify-center items-center gap-3'>
      {games.map((game, index) => {
        return (
          <div
            key={index}
            className='max-w-sm bg-gray-200 rounded overflow-hidden shadow-lg'>
            <img className='w-full h-1/2' src={`${game}.png`} alt={game} />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>{game} Game</div>
              <p className='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
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
  );
}
