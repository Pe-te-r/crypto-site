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
  name: string;
  email: string;
  // Add other user fields as necessary
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
      const token = localStorage.getItem('token');
      // If token exists, set the Authorization header
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
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
