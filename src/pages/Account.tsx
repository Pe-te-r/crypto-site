import React from 'react'
import image from "../assets/profile.jpeg"

const Account = () => {
  return (
    <div className='w-3/4 mx-auto md:w-full'>
      <h1 className='font-bold mt-2 mb-2 text-xl text-center'>Welcome to your account page</h1>
      <div className='flex w-max items-center gap-3 p-3 mx-auto mt-3'>
        <div className='w-[150px]'>
          <img src={image} className='rounded-full' alt="" />
        </div>
        <h4 className='font-semibold ml-3'>Peter Nameless</h4>
      </div>
      <div className='mx-auto w-full flex flex-col'>
        <h3 className='font-bold text-xl mt-5 mb-2 text-center'>Your Mining Packages</h3>
        <div className='flex flex-wrap text-center justify-center w-full'>
          <div className='w-1/2 p-2'>
            <h5 className='font-semibold'>Standard Mining Machine</h5>
            <p>Daily Rate: $10</p>
            <p>Estimated Mining: 100</p>
            <p>Bitcoin Value: $0.0000125</p>
          </div>
          <div className='w-1/2 p-2'>
            <h5 className='font-semibold'>Advanced Mining Machine</h5>
            <p>Daily Rate: $20</p>
            <p>Estimated Mining: 200</p>
            <p>Bitcoin Value: $0.00002</p>
          </div>
        </div>
      </div>
      <div className='flex w-full justify-center gap-3 p-3 mx-auto mt-5'>
        <button className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition'>
          Add a New Mining Package
        </button>
      </div>
      {/* a table to display the invited and registerd with your code */}
      <div className='flex w-full justify-center gap-3 p-3 mx-auto mt-5'>
          
      </div>
    </div>
  )
}

export default Account