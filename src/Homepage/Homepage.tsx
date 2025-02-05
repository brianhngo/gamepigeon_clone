import React, { useState, useCallback, useEffect } from "react";
import SocialMedia from "./SocialMedia";
import LoginModal from "../UserAuth/LoginModal.tsx";
import { useNavigate } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Homepage() {
  const navigate = useNavigate();
  const [isUserSignedIn, setIsUserSignedIn] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  const setModalTrue = useCallback(() => {
    setIsLoginModalOpen(true);
  }, []);

  const setModalFalse = useCallback(() => {
    setIsLoginModalOpen(false);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("auth_token")) {
      setIsUserSignedIn(true);
    }
  }, []);

  return (
    <div className='w-full h-full flex flex-col'>
      {/* Header */}
      <nav className='flex flex-row-reverse m-3'>
        {isUserSignedIn ? (
          <>
            <button
              type='button'
              className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 mb-1'>
              Profile
            </button>
            <button
              onClick={() => {
                sessionStorage.removeItem("auth_token");
                setIsUserSignedIn(false);
              }}
              type='button'
              className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 mb-1'>
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={setModalTrue}
            type='button'
            className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 mb-1'>
            Login
          </button>
        )}
      </nav>

      {/* Body */}
      <div className='flex-1 flex flex-col items-center justify-center'>
        <LoginModal
          setIsUserSignedIn={setIsUserSignedIn}
          isOpen={isLoginModalOpen}
          onRequestClose={setModalFalse}
          style={customStyles}
          contentLabel='Login Modal'
        />
        <section className='text-center mb-4'>
          <h1 className='text-7xl font-semibold'>GameFlock</h1>
          <p className='text-2xl mt-3'>Challenge. Play. Win.</p>
        </section>
        <section className='flex flex-col gap-4 mb-4 mt-4'>
          <button
            onClick={() => navigate("/menu")}
            className='px-4 py-2 group transition-all duration-500 hover:-translate-y-2 text-lg bg-gray-200 rounded-lg'>
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
