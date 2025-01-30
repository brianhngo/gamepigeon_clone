import React from "react";

export default function Scoreboard() {
  return (
    <div className='flex flex-col items-start p-4 space-y-4'>
      <div className='text-3xl font-semibold'>It's Player 1's turn</div>

      <div className='flex items-center space-x-3'>
        <div className='w-8 h-8 rounded-full border-2 border-white flex items-center justify-center bg-black shadow-lg'></div>

        <p className='text-xl font-semibold'>
          Player 1 - <span> 8 pieces left </span>
        </p>
      </div>

      <div className='flex items-center space-x-3'>
        <div className='w-8 h-8 rounded-full border-2 border-white flex items-center justify-center bg-red-500 shadow-lg'></div>
        <p className='text-xl font-semibold'>
          Player 2 - <span> 8 pieces left </span>
        </p>
      </div>
    </div>
  );
}
