import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

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
      <h2 className='text-2xl font-semibold text-center mb-4'>Login</h2>
      <button
        onClick={onRequestClose}
        className='absolute top-2 right-2 text-gray-500 hover:text-gray-800'>
        &times;
      </button>
      <label className='inline-flex items-center cursor-pointer'>
        <input
          type='checkbox'
          value=''
          onClick={() => setIsSignIn(!isSignIn)}
          className='sr-only peer'
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
          Toggle me
        </span>
      </label>
      {isSignIn ? (
        <form className='space-y-4'>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              className='mt-1 block w-full px-3 py-2 border rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500'
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              required
              className='mt-1 block w-full px-3 py-2 border rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500'
            />
          </div>
          <button
            type='submit'
            className='w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
            Login
          </button>
        </form>
      ) : (
        <form className='space-y-4'>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              className='mt-1 block w-full px-3 py-2 border rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500'
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              required
              className='mt-1 block w-full px-3 py-2 border rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500'
            />
          </div>
          <button
            type='submit'
            className='w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
            Create User
          </button>
        </form>
      )}
    </Modal>
  );
}
