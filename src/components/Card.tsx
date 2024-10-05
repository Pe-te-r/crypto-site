import React from 'react';

const Card = ({ title, description }: any) => {
  return (
    <div className="bg-[#F7E94D] p-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/4 m-4">
      <h5 className="text-center font-semibold text-lg">{title}</h5>
      <p className="font-serif p-2 font-normal">{description}</p>
    </div>
  );
};

export default Card;
