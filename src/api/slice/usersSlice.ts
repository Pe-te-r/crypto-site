import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../url';

export const usersSlice = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }), // replace with your API base URL
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: '/users',  // your registration API endpoint
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = usersSlice;
