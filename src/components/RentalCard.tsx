import React from 'react';
import { Link } from 'react-router-dom';

const RentalCard = ({disable, machineType, dailyRate, estimatedMining, bitcoinValue, packageDetails,index }) => {

  return (
    <div className="max-w-sm bg-gray-200 rounded-lg shadow-lg overflow-hidden my-4 p-6 mx-2">
      <h2 className="text-xl font-bold text-center mb-4">{machineType}</h2>
      <p className="text-gray-700 mb-2">Rent a machine for <strong>{dailyRate} KES</strong> a day</p>
      <p className="text-gray-700 mb-2">Estimated mining amount for a day: <strong>{estimatedMining} KES</strong></p>
      <p className="text-gray-700 mb-2">Equivalent in Bitcoin: <strong>{bitcoinValue} BTC</strong></p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Package Details:</h3>
        <p className="text-gray-600">{packageDetails}</p>
      </div>
        <Link to={`${disable}` && `/rent/${index}`}>
      <button disabled={disable} className={`mt-4 w-full  text-white py-2 rounded  transition ${disable ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} `} >
        {disable ?
           "Already booked" 
      :
        'Rent'
      }
      </button>
      </Link>
    </div>
  );
};

export default RentalCard;
