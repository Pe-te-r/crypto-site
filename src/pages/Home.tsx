import React from 'react'
import image from '../assets/bg.jpeg'

const Home = () => {
  return (
    <div className='h-screen relative flex flex-col items-center'>

    <div 
    className='w-full h-1/2 blur-sm relative lg:w-3/4' 
    style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    > 
    </div>
    <div className='absolute top-2 left-1 bg-yellow-500 p-3 rounded-md'>
      <p>Effortless Crypto Mining-Rent, Mine, Earn</p>
    </div>
    <div className='absolute align-middle right-1'>
      <button className='btn-primary bg-blue-500 p-2 font-mono rounded-md'>Explore plans</button>
      </div>
      <div className='mt-12 border shadow-lg rounded-md p-2 lg:w-3/4 self-center flex flex-col'>
        <p className='font-bold text-center font-sans'>Enjoy professional-grade mining machines with full maintenance support, optimized for maximum returns.</p>
        <div className='m-2 mb-0 flex items-center place-content-center'>
          <input type="Email" className='border-2 rounded-md m-1 outline-none p-2 md:w-1/4 sm:w-2/4 font-serif' placeholder='Email'/>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            Login
          </button>
        </div>
        <p className='text-center text-red-700 cursor-pointer'>don't have an account?</p>
        <div className='mt-3 mb-3'>
          <p className='font-bold text-center'>Rent powerful mining machines remotely and start earning cryptocurrency without the need for expensive hardware or technical knowledge.</p>
        </div>
      </div>
    </div>

  )
}

export default Home