import React from 'react';

const Card = ({ image, title, description, side }) => {
  // Determine the order based on the 'side' prop
  const isImageLeft = side === 'left';

  return (
    <div className="flex flex-col max-h-fit md:flex-row items-center m-2 justify-center p-6 bg-white rounded-lg shadow-lg mb-6 w-full max-w-[500px] md:max-w-[750px]">
      {/* Conditional rendering of the image and text based on side prop */}
      {
        image &&
      <div className={`w-full md:w-1/2 ${isImageLeft ? 'order-1' : 'order-2'} p-4`}>
        <img src={image} alt={title} className="w-full h-auto rounded-lg object-cover" />
      </div>
      }
      <div className={`w-full md:w-1/2 ${isImageLeft ? 'order-2' : 'order-1'} p-4 text-center flex flex-col justify-around h-full`}>
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
