import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import CreateUser from "./CreateUser";
import SignInUser from "./SignInUser";

Modal.setAppElement("#root");

interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  style?: Modal.styles;
  contentLabel: string;
}

export default function LoginModal({
  isOpen,
  onRequestClose,
  style,
  contentLabel,
}: LoginModalProps) {
  // T => Sign in, F => Create User
  const [isSignIn, setIsSignIn] = useState<boolean>(true);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={style}
      contentLabel={contentLabel}
      overlayClassName='fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center'
      className='bg-white rounded-lg shadow-lg w-96 p-6'>
      <button
        onClick={onRequestClose}
        className='absolute top-2 right-2 text-gray-500 hover:text-gray-800'>
        &times;
      </button>

      {isSignIn ? (
        <SignInUser changeSignIn={() => setIsSignIn(false)} />
      ) : (
        <CreateUser changeSignIn={() => setIsSignIn(true)} />
      )}
    </Modal>
  );
}
