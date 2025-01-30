import axios from "axios";
import React, { useState, useCallback } from "react";

interface SignInUserProp {
  changeSignIn: () => void;
  onRequestClose: () => void;
  setIsUserSignedIn: (arg0: boolean) => void;
}

export default function SignInUser({
  changeSignIn,
  onRequestClose,
  setIsUserSignedIn,
}: SignInUserProp) {
  const [formData, setFormData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const formDataHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setFormData((prevData) => {
        return {
          ...prevData,
          [name]: value,
        };
      });
    },
    []
  );

  const submitHandler = useCallback(
    async (event: any) => {
      try {
        event.preventDefault();

        if (formData.email.length < 1 || formData.password.length < 1) {
          return;
        }

        const { data } = await axios.post(
          "http://localhost:8000/api/users/login_user",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        if (data.token) {
          sessionStorage.setItem("auth_token", data.token);
          setIsUserSignedIn(true);
          onRequestClose();
        }
      } catch (error) {
        console.error(error);
      }
    },
    [formData]
  );

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
            value={formData.email}
            onChange={(event) => formDataHandler(event)}
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
            value={formData.password}
            onChange={(event) => formDataHandler(event)}
            type='password'
            id='password'
            name='password'
            required
            className='mt-1 block w-full px-3 py-2 border rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500'
          />
        </div>
        <button
          onClick={(event) => submitHandler(event)}
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
