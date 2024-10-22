import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // For navigation
import { packagesData } from './servers';



const Rent = () => {
  const { index } = useParams(); // Extract index from the URL
  const [days, setDays] = useState(15); // Default rental period
  const navigate = useNavigate(); // For navigation

  const selectedPackage = packagesData[Number(index)]; // Get the package data by index
  
  // Function to go back to the homepage
  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md relative">
      {/* Back Button */}
      <button 
        onClick={goBack} 
        className="absolute top-4 left-4 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
      >
        Back
      </button>
      
      <h2 className="text-2xl font-bold mb-4 text-center">Rent {selectedPackage.machineType}</h2>
      <p className="mb-2">Daily Rate: <strong>{selectedPackage.dailyRate} KES</strong></p>
      <p className="mb-2">Estimated Mining: <strong>{selectedPackage.estimatedMining} KES</strong></p>
      <p className="mb-2">Bitcoin Value: <strong>{selectedPackage.bitcoinValue} BTC</strong></p>

      <div className="mt-4">
        <label className="block mb-2 font-semibold">Select Rental Period:</label>
        <select
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          className="border p-2 rounded w-full"
        >
          <option value={15}>15 Days</option>
          <option value={30}>30 Days</option>
          <option value={45}>45 Days</option>
        </select>
      </div>

      <p className="mt-4">Total Cost: <strong>{Number(selectedPackage.dailyRate )* days} KES</strong></p>
      
      <button className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
        Confirm Rental
      </button>
    </div>
  );
};

export default Rent;
