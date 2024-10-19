import React, { useEffect, useState } from 'react';
import image from "../assets/profile.jpeg";
import { useLocalStorageContext } from '../context_fi/LocalStorageContext';
import { useGetUserByIdQuery } from '../api/slice/usersSlice';

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
  // Add other fields as necessary
}

const Account = () => {
  const { data: storageData } = useLocalStorageContext();

  const [userData, setUserData] = useState<UserData |  any>(null);

  // Fetch user data using the stored ID from localStorage
  const { data, error, isSuccess, isLoading } = useGetUserByIdQuery(storageData?.id);

  // Mock data for promo code users and recent activities
  const [promoUsers,setPromoUsers]=useState<any>([])

  const recentActivities = [
    { id: 1, activity: 'Purchased Advanced Mining Machine', date: '2024-04-20' },
    { id: 2, activity: 'Referred Alice Johnson', date: '2024-04-15' },
    { id: 3, activity: 'Deposited $500 to Bank', date: '2024-04-18' },
  ];

  useEffect(() => {
    if (isSuccess && data) {
      // Adjust this based on your data structure
      if (Array.isArray(data)) {
        setUserData(data[0]); // If data is an array

        // setPromoUsers()
      } else {
        setUserData(data); // If data is an object
      }
    }
  }, [isSuccess, data]);

  useEffect(()=>{
    setPromoUsers(userData?.promoCode?.users)
    console.log(userData)
  },[userData])
  
  // console.log(userData?.promoCode?.users[0]['user'])
  // Loading spinner component
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
          <div className='bg-white shadow rounded-lg p-6 mb-6'>
            <div className='flex flex-col md:flex-row items-center md:items-start relative'>
              <img src={image} className='w-32 h-32 rounded-full object-cover' alt="Profile" />
              <div className='mt-4 md:mt-0 md:ml-6 text-center md:text-left'>
                <h1 className='text-2xl font-bold'>
                  {userData.first_Name} {userData.last_Name}
                </h1>
                <p className='text-gray-600'>Email: {userData.email}</p>
                <p className='text-gray-600'>Member since: {new Date(userData.created_at).toLocaleDateString()}</p>
              </div>
              <div className='right-1 absolute'>
                <p><span className='font-semibold'>Invitation Code: </span><span className='ml-1 font-mono'>{userData?.promoCode?.promo_code}</span></p>
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
            <div className='bg-white shadow rounded-lg p-6 flex items-center'>
              <div className='p-4 bg-green-500 rounded-full mr-4'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className='text-xl font-semibold'>Mining Rate</h3>
                <p className='text-gray-600'>0.000015 BTC/day</p>
              </div>
            </div>
          </div>

          {/* Mining Packages */}
          <div className='bg-white shadow rounded-lg p-6 mb-6'>
            <h3 className='text-2xl font-bold mb-4 text-center'>Your Mining Packages</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='bg-gray-50 p-4 rounded-lg shadow'>
                <h5 className='text-xl font-semibold mb-2'>Standard Mining Machine</h5>
                <p className='text-gray-700'><strong>Daily Rate:</strong> $10</p>
                <p className='text-gray-700'><strong>Estimated Mining:</strong> 100 BTC</p>
                <p className='text-gray-700'><strong>Bitcoin Value:</strong> $0.0000125</p>
                <button className='mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition'>
                  Upgrade Package
                </button>
              </div>
              <div className='bg-gray-50 p-4 rounded-lg shadow'>
                <h5 className='text-xl font-semibold mb-2'>Advanced Mining Machine</h5>
                <p className='text-gray-700'><strong>Daily Rate:</strong> $20</p>
                <p className='text-gray-700'><strong>Estimated Mining:</strong> 200 BTC</p>
                <p className='text-gray-700'><strong>Bitcoin Value:</strong> $0.00002</p>
                <button className='mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition'>
                  Upgrade Package
                </button>
              </div>
            </div>
          </div>

          {/* Add New Mining Package Button */}
          <div className='flex justify-center mb-6'>
            <button className='w-full md:w-1/2 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition'>
              Add a New Mining Package
            </button>
          </div>

          {/* Promo Code Users Table */}
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
                  {promoUsers && promoUsers.map((user,index)  => (
                    <tr key={index} className='text-center hover:bg-gray-100'>
                      <td className='py-2 px-4 border-b'>{index + 1}</td>
                      
                      <td className='py-2 px-4 border-b'>{user['user'].first_Name}{' '}{user['user'].last_Name}</td>
                      <td className='py-2 px-4 border-b'>{user['user'].email}</td>
                      <td className='py-2 px-4 border-b'>{user['user'].created_at}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Activities */}
          <div className='bg-white shadow rounded-lg p-6 mb-6'>
            <h3 className='text-2xl font-bold mb-4 text-center'>Recent Activities</h3>
            <ul>
              {recentActivities.map(activity => (
                <li key={activity.id} className='flex justify-between py-2 border-b last:border-0 hover:bg-gray-50'>
                  <span>{activity.activity}</span>
                  <span className='text-gray-500'>{activity.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Notifications or Messages */}
          <div className='bg-white shadow rounded-lg p-6 mb-6'>
            <h3 className='text-2xl font-bold mb-4 text-center'>Notifications</h3>
            <ul>
              <li className='py-2 px-4 border-b hover:bg-gray-50'>Your mining package has been upgraded.</li>
              <li className='py-2 px-4 border-b hover:bg-gray-50'>You have a new referral bonus.</li>
              <li className='py-2 px-4 border-b hover:bg-gray-50'>Deposit of $500 was successful.</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Account;
