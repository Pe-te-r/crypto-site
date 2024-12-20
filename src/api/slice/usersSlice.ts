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
    getValidation:builder.query<any,any>({
      query:()=>({
        url:'/ok',
        method:'GET',
      })
    }),
    getUserById: builder.query<User, string>({
      query: (id) => ({
        url: `/users/${id}`,  // Your user details API endpoint
        method: 'GET',
      }),
    }),
    bookServer: builder.mutation<any,any>({
      query: (serverData) => ({
        url: '/book',  // Your book server API endpoint
        method: 'POST',
        body: serverData,
      }),
    }),
    getBookedServer: builder.query<any,any>({
      query: (user_id)=>({
        url:`/book/${user_id}`,
        method:'GET',
      })
    })
  }),
});

// Export hooks for the defined endpoints
export const { useRegisterUserMutation, useLoginUserMutation, useGetUserByIdQuery,useGetValidationQuery,useBookServerMutation,useGetBookedServerQuery } = usersSlice;





