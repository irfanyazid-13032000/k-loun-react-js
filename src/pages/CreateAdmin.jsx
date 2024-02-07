import React,{useState} from 'react'
import { Modal } from '../components/Modal'

export default function CreateAdmin({visible, setVisible}) {
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
  return (
    <Modal visible={visible} setVisible={setVisible} content={
      <div>
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
    }/>
    
  )
}
