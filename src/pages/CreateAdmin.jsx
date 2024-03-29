import React,{useState} from 'react'
import { Modal } from '../components/Modal'

export default function CreateAdmin({visible, setVisible}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }

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
        <div className='mb-4'>
          <label className='block text-sm text-gray-700' htmlFor='email'>
            email
          </label>
          <input
            id='email'
            className='w-full px-4 py-2 border rounded-md'
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm text-gray-700' htmlFor='name'>
            name
          </label>
          <input
            id='name'
            className='w-full px-4 py-2 border rounded-md'
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm text-gray-700' htmlFor='phone'>
            phone
          </label>
          <input
            id='phone'
            className='w-full px-4 py-2 border rounded-md'
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm text-gray-700' htmlFor='address'>
          address
          </label>
          <input
            id='address'
            className='w-full px-4 py-2 border rounded-md'
            value={address}
            onChange={handleAddressChange}
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
