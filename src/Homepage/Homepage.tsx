import React from "react";
import SocialMedia from "./SocialMedia";

export default function Homepage() {
  return (
    <div className='w-full h-full flex flex-col'>
      {/* Header */}
      <nav className='flex flex-row-reverse m-3'>
        <button
          type='button'
          className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 mb-1'>
          Login
        </button>
      </nav>

      {/* Body */}
      <div className='flex-1 flex flex-col items-center justify-center'>
        <section className='text-center mb-4'>
          <h1 className='text-7xl font-semibold'>GameFlock</h1>
          <p className='text-2xl mt-3'>Challenge. Play. Win.</p>
        </section>
        <section className='flex flex-col gap-4 mb-4 mt-4'>
          <button className='px-4 py-2 group transition-all duration-500 hover:-translate-y-2 text-lg bg-gray-200 rounded-lg'>
            Play
          </button>
          <button className='px-4 py-2 group transition-all duration-500 hover:-translate-y-2 text-lg bg-gray-200 rounded-lg'>
            Settings
          </button>
          <button className='px-4 py-2 group transition-all duration-500 hover:-translate-y-2 text-lg bg-gray-200 rounded-lg'>
            Leaderboards
          </button>
        </section>
        <section className='flex gap-4 mt-4 mb-4'>
          <SocialMedia />
        </section>
      </div>

      {/* Footer */}
      <footer className='flex flex-row-reverse m-3'>
        <p className='text-lg text-slate-300'>v1.0</p>
      </footer>
    </div>
  );
}
