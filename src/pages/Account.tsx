import React, { useEffect, useState } from 'react';
import image from "../assets/profile.jpeg";
import { useLocalStorageContext } from '../context_fi/LocalStorageContext';
import { useGetUserByIdQuery, useGetValidationQuery } from '../api/slice/usersSlice';
import {  Link, useNavigate } from 'react-router-dom';
import { DiVim } from 'react-icons/di';

// Define TypeScript interfaces for better type safety
interface UserData {
  id: string;
  first_Name: string;
  last_Name: string;
  email: string;
  created_at: string;
  account?: {
    balance: string;
  };
  error?: string
  // Add other fields as necessary
}


const Account = () => {


  
  const [userData, setUserData] = useState<UserData |  any>(null);
  // const info_data = localStorage.getItem("myData"); // Replace "myData" with the key of the item you want to retrieve

// If the data is JSON, parse it to convert it back to an object
const { data: storageData, removeData } = useLocalStorageContext();


  // Fetch user data using the stored ID from localStorage
  const { data, error, isSuccess, isLoading,status } = useGetUserByIdQuery(storageData?.id,{refetchOnFocus:true,refetchOnReconnect:true,pollingInterval:5000});

  // Mock data for promo code users and recent activities
  const [promoUsers,setPromoUsers]=useState<any[]>()
  const [daily_mine,setDaily_min]=useState<number>(0)

  const recentActivities = [
    { id: 1, activity: 'Purchased Advanced Mining Machine', date: '2024-04-20' },
    { id: 2, activity: 'Referred Alice Johnson', date: '2024-04-15' },
    { id: 3, activity: 'Deposited $500 to Bank', date: '2024-04-18' },
  ];

  useEffect(()=>{
    if(userData){
      let total=0
        for(let i = 0; i<userData?.server_hires.length;i++){
          // console.log(userData?.server_hires[i]?.day_rate)
          total += Number(userData?.server_hires[i]?.day_minining)
          console.log(total)
      }
      setDaily_min(total)
    }
  },[userData])

  useEffect(() => {
    if (isSuccess && data) {
      // Adjust this based on your data structure
      if (Array.isArray(data)) {
        console.log(status)
        setUserData(data[0]); // If data is an array

        // setPromoUsers()
      }else if(data?.error || error){
        if(data.error=='expired' || data.error =="no token" || data.error == 'invalid input syntax for type uuid: "undefined"' || data.error == 'Unauthorized' ){
          navigate('/login')
        }

      }else {
        setUserData(data); // If data is an object
      }
    }
    if(error){
      console.log(data)
      console.log(error)
    }
   
  }, [isSuccess, data,error]);
  const navigate = useNavigate()
  
  console.log(promoUsers)

  useEffect(()=>{
    setPromoUsers(userData?.promoCode?.users)

    // console.log(userData?.promoCode?.users[0]['user'])
  },[userData])

  const handleLogOut=()=>{
    removeData()
    navigate('/')
  }

  const Loader = () => (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin inline-block w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

  return (
    <div className='max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen'>
      {isLoading && <Loader />} {/* Display loader while data is loading */}

      {error && (
        <p className="text-red-500 text-center">
          Failed to load user data. Please try again later.
        </p>
      )} {/* Handle error */}

      {isSuccess && userData && (  // Render the component only if data is successfully loaded
        <>
          {/* Profile Section */}
          <div className='bg-white shadow rounded-lg p-6 mb-6  flex flex-col'>
            <div className='flex flex-col md:flex-row items-center md:items-start relative'>
              <img src={image} className='w-32 h-32 rounded-full object-cover' alt="Profile" />
              <div className='mt-4 md:mt-0 md:ml-6 text-center md:text-left w-full'>
                <h1 className='text-2xl font-bold text-center'>
                  {userData.first_Name} {userData.last_Name}
                </h1>
                <div className='flex w-auto justify-evenly mt-8'>
                  <div>
                    <p><span className='font-semibold'>Email: </span><span className='ml-1 font-mono'>{userData.email}</span></p>
                    <p><span className='font-semibold'>Member since: </span><span className='ml-1 font-mono'>{new Date(userData.created_at).toDateString()}</span></p>
                  </div>
                  <div>
                    <p><span className='font-semibold'>Invitation Code: </span><span className='ml-1 font-mono'>{userData?.promoCode?.promo_code}</span></p>
                    <p className='mt-3'><span className='font-semibold'>Invitation Earnings: </span><span className='ml-1 font-sans '>ksh {userData?.promoCode?.users.length * 5}</span></p>
                  </div>
                </div>
              <button className='mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition' onClick={handleLogOut}>
              Log out</button>
              </div>
            </div>
          </div>

          {/* Bank Balance and Mining Rate */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <div className='bg-white shadow rounded-lg p-6 flex items-center'>
              <div className='p-4 bg-blue-500 rounded-full mr-4'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a5 5 0 00-10 0v2M5 12h14l-1.405 6.815A2 2 0 0116.19 21H7.81a2 2 0 01-1.405-1.185L5 12z" />
                </svg>
              </div>
              <div>
                <h3 className='text-xl font-semibold'>Bank Balance</h3>
                <p className='text-gray-600'>ksh { userData.account?.balance || '0.00'}</p>
              </div>
            </div>
            <div className='bg-white shadowprounded-lg p-6 flex items-center'>
              <div className='p-4 bg-green-500 rounded-full mr-4'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className='text-xl font-semibold'>Mining Rate</h3>
                <p className='text-gray-600'>ksh {daily_mine} /per day</p>
              </div>
            </div>
          </div>

          {/* Mining Packages */}
          {userData?.server_hires && userData?.server_hires.length > 0 &&
          <div className='bg-white shadow rounded-lg p-6 mb-6'>
            <h3 className='text-2xl font-bold mb-4 text-center'>Your Mining Packages</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {
             userData?.server_hires.map((server, index) => (
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center mb-6" key={index}>
                {/* Centered Heading */}
                <h5 className="text-2xl font-semibold mb-4 text-center text-green-600">
                  {/* Advanced Mining Machine */}
                  Machine info
                </h5>
            
                {/* Content Container */}
                <div className="flex flex-col md:flex-row w-full justify-between">
                  {/* Left Content */}
                  <div className="md:w-1/2 space-y-2 mb-4 md:mb-0">
                    <p className="text-gray-700"><strong>Daily Renting:</strong> Ksh. {server.day_rate}</p>
                    <p className="text-gray-700"><strong>Daily Mining:</strong> Ksh. {server.day_minining}</p>
                    <p className="text-gray-700"><strong>Days Remaining:</strong> {server.days_hired}</p>
                    <p className="text-gray-700"><strong>Total Mining: </strong>Ksh. {Number(server.day_rate) * Number(server.days_hired)}</p>
                  </div>
            
                  {/* Right Content */}
                  <div className="md:w-1/2 space-y-2">
                    <p className="text-gray-700"><strong>Start Date:</strong> {new Date(server.start_date).toDateString()}</p>
                    <p className="text-gray-700"><strong>End Date:</strong> {new Date(server.end_date).toDateString()}</p>
                  </div>
                </div>
            
                {/* Button */}
                {/* Uncomment if needed */}
                {/* <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
                  Upgrade Package
                </button> */}
              </div>
            ))
          }            

            </div>
          </div>
}

          {/* Add New Mining Package Button */}
          <div className='flex justify-center mb-6'>
            <Link to= '/' className='w-full md:w-1/2 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition text-center'>
            {/* <button className='w-full md:w-1/2 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition'> */}
              Add a New Mining Package
            {/* </button> */}
            </Link>
          </div>

          {/* Promo Code Users Table */}
          {/* {promoUsers && promoUsers?.length > 1 &&  */}
          { Array.isArray(promoUsers) && promoUsers.length > 0 ?
          <div className='bg-white shadow rounded-lg p-6 mb-6'>
            <h3 className='text-2xl font-bold mb-4 text-center'>Users Registered with Your Promo Code</h3>
            <div className='overflow-x-auto'>
              <table className='min-w-full bg-white'>
                <thead>
                  <tr>
                    <th className='py-2 px-4 border-b'>#</th>
                    <th className='py-2 px-4 border-b'>Name</th>
                    <th className='py-2 px-4 border-b'>Email</th>
                    <th className='py-2 px-4 border-b'>Registration Date</th>
                  </tr>
                </thead>
                <tbody>
                  {promoUsers.map((user,index)  => (
                    <tr key={index} className='text-center hover:bg-gray-100'>
                      <td className='py-2 px-4 border-b'>{index + 1}</td>                      
                      <td className='py-2 px-4 border-b'>{user['user'].first_Name}{' '}{user['user'].last_Name}</td>
                      <td className='py-2 px-4 border-b'>{user['user'].email}</td>
                      <td className='py-2 px-4 border-b'>{new Date(user['user'].created_at).toDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div> :
          <div>
            <h3 className='text-2xl font-bold mb-4 text-center'>No user Registered with your verification code</h3>
            <p className='text-center text-[1.1rem]'>Share code: <span className='font-mono'>{userData?.promoCode?.promo_code} </span>  with new registering users to earn more.</p>

          </div>
          }
        </>
      )}
    </div>
  );
};

export default Account;
