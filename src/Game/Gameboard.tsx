import React from "react";
import { gameBoard } from "./Utils.js";

export default function Gameboard() {
  return (
    <section className='flex justify-center items-center w-screen h-screen'>
      <div className='grid grid-cols-8 border-4 border-black'>
        {gameBoard.map((row, rowIndex) =>
          row.map((column, columnIndex) => (
            <div
              key={`${rowIndex}-${columnIndex}`}
              className={`w-12 h-12 flex items-center justify-center border border-black 
                ${
                  (rowIndex + columnIndex) % 2 === 0 ? "bg-white" : "bg-black"
                }`}>
              {rowIndex < 3 && (rowIndex + columnIndex) % 2 !== 0 ? (
                <div className='w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-red-500 shadow-lg'></div>
              ) : null}

              {rowIndex > 4 && (rowIndex + columnIndex) % 2 !== 0 ? (
                <div className='w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-black shadow-lg'></div>
              ) : null}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
