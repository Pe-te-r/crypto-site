import React, { useEffect, useState } from 'react'
import image from '../assets/bg.jpeg'
import RentalCard from '../components/RentalCard';
import { Link } from 'react-router-dom';
import { packagesData } from './servers';
import { useLocalStorageContext } from '../context_fi/LocalStorageContext';
import { useGetBookedServerQuery } from '../api/slice/usersSlice';

const Home = () => {
 
  const { data: storageData } = useLocalStorageContext();
  const {data,isSuccess} = useGetBookedServerQuery(storageData?.id,{refetchOnFocus:true,refetchOnReconnect:true,pollingInterval:10000})
  const [bookedId,setBookedId]= useState<any[]>([])

  useEffect(()=>{
    if(data && isSuccess){
      setBookedId(data?.book)
    }
    
  },[data,isSuccess])
  return (
    <div className='min-h-screen pt-6 mt-3  flex flex-col items-center bg-white'>

    <div className='relative w-2/3 border border-black flex flex-col justify-center' > 
      <img src={image} alt="" className='w-full h-[650px] blur-sm'/>
    <div className='absolute top-2 left-1 bg-yellow-500 p-3 rounded-md'>
      <p>Effortless Crypto Mining-Rent, Mine, Earn</p>
    </div>
    <div className='absolute bottom-1 right-1'>
      <button className='btn-primary bg-blue-500 p-2 font-mono rounded-md'>Explore plans</button>
    </div>
    <div className='shadow-lg rounded-md p-2 w-2/3  flex flex-col bg-gray-200 absolute right-0 top-1/3 '>
        <p className='font-bold text-center font-sans'>Enjoy professional-grade mining machines with full maintenance support, optimized for maximum returns.</p>
        {      !storageData?.logged &&
        <>
        <div className='m-2 mb-0 flex items-center place-content-center'>
          {/* <input type="Email" className='border-2 rounded-md m-1 outline-none p-2 w-2/3 font-serif' placeholder='Email'/> */}
          <Link to='/login' className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 w-2/4 text-center">
            Login
          </Link>
        </div>
        <Link to='/register' className='text-center text-red-700 cursor-pointer'>don't have an account?</Link>
        </>
        }
        <div className='mt-3 mb-3'>
          <p className='font-bold text-center'>Rent powerful mining machines remotely and start earning cryptocurrency without the need for expensive hardware or technical knowledge.</p>
        </div>
      </div>
    </div>
      <div className='mt-5'>
      <h1 className="text-center text-2xl font-bold mb-6">Rental Packages</h1>
      <div className="flex w-3/4  mx-auto flex-wrap justify-center">
        {packagesData.map((pkg, index) => {          
          for(let i = 0; i<bookedId?.length;i++){
            if(bookedId[i]?.server_id == index ){
              return <RentalCard key={index} disable={true} index={index} {...pkg}/>
            }
          }
          return <RentalCard key={index} disable={false} index={index} {...pkg}/>
          })}
      </div>
      </div>
    </div>

  )
}

export default Home