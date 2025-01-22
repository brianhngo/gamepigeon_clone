import React from "react";

interface SignInUserProp {
  changeSignIn: () => void;
}

export default function SignInUser({ changeSignIn }: SignInUserProp) {
  return (
    <>
      <h2 className='text-2xl font-semibold text-center mb-4'>Login</h2>
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
      <p
        onClick={() => changeSignIn()}
        className='text-left text-blue-600 mt-3 hover:underline cursor-pointer'>
        {" "}
        Create User
      </p>
    </>
  );
}
