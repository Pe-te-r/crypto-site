import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersSlice } from './slice/usersSlice';

export const store = configureStore({
  reducer: {
    [usersSlice.reducerPath]: usersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersSlice.middleware),
});

setupListeners(store.dispatch);
