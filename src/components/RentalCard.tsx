import React from 'react';

const RentalCard = ({ machineType, dailyRate, estimatedMining, bitcoinValue, packageDetails }) => {
  return (
    <div className="max-w-sm bg-gray-200 rounded-lg shadow-lg overflow-hidden my-4 p-6 mx-2">
      <h2 className="text-xl font-bold text-center mb-4">{machineType}</h2>
      <p className="text-gray-700 mb-2">Rent a machine for <strong>{dailyRate} KES</strong> a day</p>
      <p className="text-gray-700 mb-2">Estimated mining amount for the day: <strong>{estimatedMining} KES</strong></p>
      <p className="text-gray-700 mb-2">Equivalent in Bitcoin: <strong>{bitcoinValue} BTC</strong></p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Package Details:</h3>
        <p className="text-gray-600">{packageDetails}</p>
      </div>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
        Rent Now
      </button>
    </div>
  );
};

export default RentalCard;
