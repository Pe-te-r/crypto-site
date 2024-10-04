import React from 'react'
import image from '../assets/bg.jpeg'

const Home = () => {
  return (
    <div className='h-screen relative'>

    <div 
    className='w-full h-1/2 blur-sm relative' 
    style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    > 
    </div>
    <div className='absolute top-2 left-1 bg-yellow-500 p-3 rounded-md'>
      <p>Effortless Crypto Mining-Rent, Mine, Earn</p>
    </div>
    <div className='absolute align-middle right-1'>
      <button className='btn-primary bg-blue-500 p-2 font-mono rounded-md'>Explore plans</button>
      </div>
      <div className='mt-12 border shadow-lg rounded-md p-2'>
        <p className='font-bold text-center font-sans'>Enjoy professional-grade mining machines with full maintenance support, optimized for maximum returns.</p>
        <div className='m-2 flex items-center place-content-center'>
          <input type="Email" className='border-2 rounded-md m-1 outline-none p-2 w-2/4' placeholder='Email'/>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            Primary Button
          </button>
        </div>
        <p>don't have an account?</p>
        <div>
          <p>Rent powerful mining machines remotely and start earning cryptocurrency without the need for expensive hardware or technical knowledge.</p>
        </div>
      </div>
    </div>

  )
}

export default Home