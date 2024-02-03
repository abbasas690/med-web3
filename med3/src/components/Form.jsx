// Form.js

import React, { useState } from 'react';
import { useWallet } from '../context/WalletContext';

const Form = () => {
  const { walletDetails, setWallet } = useWallet();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '', // Added age field
    role: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add your form submission logic here
  };

  const connectMetamask = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });

        setWallet({
          address: accounts[0],
          // Add other wallet details as needed
        });

        alert('Metamask connected successfully!');
      } else {
        alert('Metamask not installed. Please install Metamask to connect.');
      }
    } catch (error) {
      console.error('Metamask connection error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
     
       <button
        onClick={connectMetamask}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        {walletDetails?.address ? `Connected: ${walletDetails.address}` : 'Connect Metamask Wallet'}
      </button>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 font-semibold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">Role</label>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="role"
                value="doctor"
                onChange={handleChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Doctor</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="role"
                value="patient"
                onChange={handleChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Patient</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="role"
                value="insurance"
                onChange={handleChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Insurance</span>
            </label>
          </div>
        </div>

        {/* Conditionally render the Age field based on the selected role */}
        {formData.role === 'patient' && (
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-600 font-semibold mb-2">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        )}

        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;