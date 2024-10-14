import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../url';

// Define the type for login data, making the 'code' optional
interface LoginData {
  email: string;
  password: string;
  code?: string;  // Optional field for code
}

export const usersSlice = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),  // Use your actual API base URL
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
  }),
});

// Export hooks for registering and logging in users
export const { useRegisterUserMutation, useLoginUserMutation } = usersSlice;
