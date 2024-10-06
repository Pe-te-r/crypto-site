import React from 'react'
import image from '../assets/bg.jpeg'
import RentalCard from '../components/RentalCard';

const Home = () => {
  const packagesData = [
    {
      machineType: "Standard Mining Machine",
      dailyRate: "10",
      estimatedMining: "100",
      bitcoinValue: "0.0000125", // This is just an example; calculate dynamically
      packageDetails: "This machine is perfect for beginners looking to start mining crypto easily."
    },{
      machineType: "Standard Mining Machine",
      dailyRate: "10",
      estimatedMining: "100",
      bitcoinValue: "0.0000125", // This is just an example; calculate dynamically
      packageDetails: "This machine is perfect for beginners looking to start mining crypto easily."
    },{
      machineType: "Standard Mining Machine",
      dailyRate: "10",
      estimatedMining: "100",
      bitcoinValue: "0.0000125", // This is just an example; calculate dynamically
      packageDetails: "This machine is perfect for beginners looking to start mining crypto easily."
    },{
      machineType: "Standard Mining Machine",
      dailyRate: "10",
      estimatedMining: "100",
      bitcoinValue: "0.0000125", // This is just an example; calculate dynamically
      packageDetails: "This machine is perfect for beginners looking to start mining crypto easily."
    },
    {
      machineType: "Advanced Mining Machine",
      dailyRate: "20",
      estimatedMining: "200",
      bitcoinValue: "0.000025", // This is just an example; calculate dynamically
      packageDetails: "An advanced machine for serious miners. High efficiency and output."
    },{
      machineType: "Advanced Mining Machine",
      dailyRate: "20",
      estimatedMining: "200",
      bitcoinValue: "0.000025", // This is just an example; calculate dynamically
      packageDetails: "An advanced machine for serious miners. High efficiency and output."
    },{
      machineType: "Advanced Mining Machine",
      dailyRate: "20",
      estimatedMining: "200",
      bitcoinValue: "0.000025", // This is just an example; calculate dynamically
      packageDetails: "An advanced machine for serious miners. High efficiency and output."
    },
    // Add more packages as needed
  ];
  return (
    <div className='min-h-screen mt-10  flex flex-col items-center bg-white-200'>

    <div className='relative w-2/4 ' > 
      <img src={image} alt="" className='w-full h-[650px] blur-sm'/>

    <div className='absolute top-2 left-1 bg-yellow-500 p-3 rounded-md'>
      <p>Effortless Crypto Mining-Rent, Mine, Earn</p>
    </div>
    <div className='absolute bottom-1 right-1'>
      <button className='btn-primary bg-blue-500 p-2 font-mono rounded-md'>Explore plans</button>
    </div>
    <div className='shadow-lg rounded-md p-2 w-3/4  flex flex-col bg-gray-200 absolute left-0 top-1/3 '>
        <p className='font-bold text-center font-sans'>Enjoy professional-grade mining machines with full maintenance support, optimized for maximum returns.</p>
        <div className='m-2 mb-0 flex items-center place-content-center'>
          <input type="Email" className='border-2 rounded-md m-1 outline-none p-2 w-2/3 font-serif' placeholder='Email'/>
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
      <div className='mt-5'>
      <h1 className="text-center text-2xl font-bold mb-6">Rental Packages</h1>
      <div className="flex w-3/4  mx-auto flex-wrap justify-center">
        {packagesData.map((pkg, index) => (
          <RentalCard key={index} {...pkg} />
        ))}
      </div>
      </div>
    </div>

  )
}

export default Home