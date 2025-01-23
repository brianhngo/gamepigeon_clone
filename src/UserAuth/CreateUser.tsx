import React, { useCallback, useState } from "react";
import axios from "axios";

interface CreateUserProp {
  changeSignIn: () => void;
}

export default function CreateUser({ changeSignIn }: CreateUserProp) {
  const [formData, setFormData] = useState<{
    email: string;
    password1: string;
    password2: string;
  }>({
    email: "",
    password1: "",
    password2: "",
  });

  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const resetFormData = () => {
    setFormData({
      email: "",
      password1: "",
      password2: "",
    });
  };
  const onSubmitHandler = async (event: any) => {
    try {
      event.preventDefault();
      // Need to check conditions
      if (
        formData.email.length < 1 ||
        formData.password1.length < 1 ||
        formData.password2.length < 1
      ) {
        return;
      }
      console.log("hi");
      const { data } = await axios.post(
        "http://localhost:8000/api/users/create_user",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (data) {
        console.log("sucessfully added");
        resetFormData();
      }
    } catch (error2) {
      console.error(error2);
    }
  };

  return (
    <>
      <h2 className='text-2xl font-semibold text-center mb-4'>Create User</h2>
      <form className='space-y-4' onSubmit={(event) => onSubmitHandler(event)}>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'>
            Email
          </label>
          <input
            value={formData.email}
            onChange={(event) => onChangeHandler(event)}
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
            value={formData.password1}
            onChange={(event) => onChangeHandler(event)}
            type='password'
            id='password1'
            name='password1'
            required
            className='mt-1 block w-full px-3 py-2 border rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500'
          />
        </div>
        <div>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-700'>
            Reconfirm Password
          </label>
          <input
            value={formData.password2}
            onChange={(event) => onChangeHandler(event)}
            type='password'
            id='password2'
            name='password2'
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
      <p
        onClick={() => changeSignIn()}
        className='text-left text-blue-600 mt-3 hover:underline cursor-pointer'>
        {" "}
        Go back to Login
      </p>
    </>
  );
}
