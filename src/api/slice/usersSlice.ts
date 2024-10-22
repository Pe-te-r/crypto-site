import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../url';
import { useLocalStorageContext } from '../../context_fi/LocalStorageContext';

// Define the type for login data, making the 'code' optional
interface LoginData {
  email: string;
  password: string;
  code?: string;  // Optional field for code
}

// Define the type for user data
interface User {
  id: string;
  first_Name: string;
  last_Name: string;
  email: string;
  created_at: string;
  account?: {
    balance: string;
  };
  error?:string
}
const getToken = () => {
  const { data } = useLocalStorageContext(); // Access token from context
  return data?.token || null; // Assuming 'token' is stored in the context's 'data'
};

// Create the API slice with authorization handling
export const usersSlice = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,  // Use your actual API base URL
    prepareHeaders: (headers) => {
      // Get token from localStorage
      const info: any = localStorage.getItem('myData');
      // console.log(info)
      const token =JSON.parse(info);
      // console.log(token);
      // If token exists, set the Authorization header
      if (token) {
        headers.set('Authorization', `${token.token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: '/users',  // Your registration API endpoint
        method: 'POST',
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (loginData: LoginData) => ({
        url: '/login',  // Your login API endpoint
        method: 'POST',
        body: loginData,
      }),
    }),
    getUserById: builder.query<User, string>({
      query: (id) => ({
        url: `/users/${id}`,  // Your user details API endpoint
        method: 'GET',
      }),
    }),
  }),
});

// Export hooks for the defined endpoints
export const { useRegisterUserMutation, useLoginUserMutation, useGetUserByIdQuery } = usersSlice;






// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { baseUrl } from '../url';
// import { useLocalStorageContext } from '../../context_fi/LocalStorageContext';

// // Define the type for login data, making the 'code' optional
// interface LoginData {
//   email: string;
//   password: string;
//   code?: string;  // Optional field for code
// }

// // Define the type for user data
// interface User {
//   id: string;
//   first_Name: string;
//   last_Name: string;
//   email: string;
//   created_at: string;
//   account?: {
//     balance: string;
//   };
// }

// // Function to handle logout or redirect when token expires
// const handleUnauthorized = (result) => {
//   console.log(result.error)
//   // Your custom logic for handling 401
//   console.log('Token expired, redirecting to login...');
//   // Example: Redirect to login or clear user data
//   localStorage.removeItem('myData'); // Clear local storage
//   // Optionally redirect to login page, if you're using React Router
//   window.location.href = '/login'; // This could also be handled via routing
// };

// // Create the API slice with authorization handling
// export const usersSlice = createApi({
//   reducerPath: 'user',
//   baseQuery: async (args, api, extraOptions) => {
//     const baseQuery = fetchBaseQuery({
//       baseUrl: baseUrl,
//       prepareHeaders: (headers) => {
//         const info: any = localStorage.getItem('myData');
//         const token = JSON.parse(info);
//         if (token) {
//           headers.set('Authorization', `${token.token}`);
//         }
//         return headers;
//       },
//     });

//     const result = await baseQuery(args, api, extraOptions);

//     // Check if the response status is 401
//     if (result.error && result.error.status === 401) {
//       handleUnauthorized(result); // Call your function to handle unauthorized access
//     }

//     return result;
//   },
//   endpoints: (builder) => ({
//     registerUser: builder.mutation({
//       query: (userData) => ({
//         url: '/users',
//         method: 'POST',
//         body: userData,
//       }),
//     }),
//     loginUser: builder.mutation({
//       query: (loginData: LoginData) => ({
//         url: '/login',
//         method: 'POST',
//         body: loginData,
//       }),
//     }),
//     getUserById: builder.query<User, string>({
//       query: (id) => ({
//         url: `/users/${id}`,
//         method: 'GET',
//       }),
//     }),
//   }),
// });

// // Export hooks for the defined endpoints
// export const { useRegisterUserMutation, useLoginUserMutation, useGetUserByIdQuery } = usersSlice;
