import React, { useState } from 'react';
import mesinCuci from '../../public/img/ruang-laundry_169.jpeg';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const [errors, setErrors] = useState({});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const validateInputs = () => {
    const errors = {};

    if (!username) {
      errors.username = 'username must be present';
    }

    if (!password || password < 10) {
      errors.password = 'password invalid';
    }
    if (!phone) {
      errors.phone = 'phone must be present';
    }

    if (!address) {
      errors.address = 'address must be present';
    }

    // Add similar validation for other fields

    return errors;
  };


  const handleRegister = () => {
    // Lakukan sesuatu dengan data yang disimpan dalam state
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Phone:', phone);
    console.log('Address:', address);

    const validationErrors = validateInputs();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }


  };

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto p-10 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
            />
             {errors.username && (
              <p className='text-red-300 text-sm'>{errors.username}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
             {errors.password && (
              <p className='text-red-300 text-sm'>{errors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Enter your phone"
              value={phone}
              onChange={handlePhoneChange}
            />
            {errors.phone && (
              <p className='text-red-300 text-sm'>{errors.phone}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={handleAddressChange}
            />
            {errors.address && (
              <p className='text-red-300 text-sm'>{errors.address}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
