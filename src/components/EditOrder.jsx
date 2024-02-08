// src/components/EditOrder.js
import React, { useState } from 'react';
import { Modal } from '../components/Modal';

export default function EditOrder({ visible, setVisible, id }) {
  const [service, setService] = useState('');
  const [dateSubmitted, setDateSubmitted] = useState('');
  const [dateFinish, setDateFinish] = useState('');
  const [customer, setCustomer] = useState('');
  const [pricePerKg, setPricePerKg] = useState('');
  const [weight, setWeight] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [status, setStatus] = useState('');
  const [paid, setPaid] = useState('');

  const handleServiceChange = (e) => {
    setService(e.target.value);
  };

  const handleDateSubmittedChange = (e) => {
    setDateSubmitted(e.target.value);
  };

  const handleDateFinishChange = (e) => {
    setDateFinish(e.target.value);
  };

  const handleCustomerChange = (e) => {
    setCustomer(e.target.value);
  };

  const handlePricePerKgChange = (e) => {
    setPricePerKg(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(parseInt(e.target.value, 10) || 0);
  };

  const handleTotalPriceChange = (e) => {
    setTotalPrice(parseInt(e.target.value, 10) || 0);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handlePaidChange = (e) => {
    setPaid(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Service:', service);
    console.log('Date Submitted:', dateSubmitted);
    console.log('Date Finish:', dateFinish);
    console.log('Customer:', customer);
    console.log('Price Per Kg:', pricePerKg);
    console.log('Weight:', weight);
    console.log('Total Price:', totalPrice);
    console.log('Status:', status);
    console.log('Paid:', paid);

    // Kode untuk menyimpan perubahan atau melakukan operasi lainnya

    setVisible(false);
  };

  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      content={
        <div>
          <h2 className='text-lg font-semibold mb-4'>Edit Order</h2>
          <div className='mb-4'>
            <label className='block text-sm text-gray-700' htmlFor='service'>
              Service
            </label>
            <input
              type='text'
              id='service'
              className='w-full px-4 py-2 border rounded-md'
              value={service}
              onChange={handleServiceChange}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm text-gray-700' htmlFor='dateSubmitted'>
              Date Submitted
            </label>
            <input
              type='date'
              id='dateSubmitted'
              className='w-full px-4 py-2 border rounded-md'
              value={dateSubmitted}
              onChange={handleDateSubmittedChange}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm text-gray-700' htmlFor='dateFinish'>
              Date Finish
            </label>
            <input
              type='date'
              id='dateFinish'
              className='w-full px-4 py-2 border rounded-md'
              value={dateFinish}
              onChange={handleDateFinishChange}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm text-gray-700' htmlFor='customer'>
              Customer
            </label>
            <input
              type='text'
              id='customer'
              className='w-full px-4 py-2 border rounded-md'
              value={customer}
              onChange={handleCustomerChange}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm text-gray-700' htmlFor='pricePerKg'>
              Price Per Kg
            </label>
            <input
              type='text'
              id='pricePerKg'
              className='w-full px-4 py-2 border rounded-md'
              value={pricePerKg}
              onChange={handlePricePerKgChange}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm text-gray-700' htmlFor='weight'>
              Weight
            </label>
            <input
              type='number'
              id='weight'
              className='w-full px-4 py-2 border rounded-md'
              value={weight}
              onChange={handleWeightChange}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm text-gray-700' htmlFor='totalPrice'>
              Total Price
            </label>
            <input
              type='number'
              id='totalPrice'
              className='w-full px-4 py-2 border rounded-md'
              value={totalPrice}
              onChange={handleTotalPriceChange}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm text-gray-700' htmlFor='status'>
              Status
            </label>
            <input
              type='text'
              id='status'
              className='w-full px-4 py-2 border rounded-md'
              value={status}
              onChange={handleStatusChange}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm text-gray-700' htmlFor='paid'>
              Paid
            </label>
            <input
              type='text'
              id='paid'
              className='w-full px-4 py-2 border rounded-md'
              value={paid}
              onChange={handlePaidChange}
            />
          </div>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded-md'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      }
    />
  );
}
