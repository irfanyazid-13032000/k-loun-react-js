import React, { useState } from 'react';

export const Modal = ({ visible, setVisible }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Username:', username);
    console.log('Password:', password);

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[400px] flex flex-col bg-white p-6 rounded'>
        <button
          className='text-black text-xl place-self-end'
          onClick={() => {
            setVisible(false);
          }}
        >
          X
        </button>
        <h2 className='text-lg font-semibold mb-4'>Create Admin</h2>
        <div className='mb-4'>
          <label className='block text-sm text-gray-700' htmlFor='username'>
            Username
          </label>
          <input
            type='text'
            id='username'
            className='w-full px-4 py-2 border rounded-md'
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm text-gray-700' htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='w-full px-4 py-2 border rounded-md'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-md'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
